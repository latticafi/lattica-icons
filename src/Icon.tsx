import {
  forwardRef,
  lazy,
  Suspense,
  type ForwardRefExoticComponent,
  type Ref,
  type RefAttributes,
  type SVGProps,
} from "react";
import type { IconName } from "./icon-names";

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "ref"> {
  name: IconName;
  size?: number | string;
  fallback?: React.ReactNode;
}

type Comp = ForwardRefExoticComponent<
  Omit<SVGProps<SVGSVGElement>, "ref"> &
    { size?: number | string } &
    RefAttributes<SVGSVGElement>
>;
const cache = new Map<string, React.LazyExoticComponent<Comp>>();

function getLazy(name: string) {
  let c = cache.get(name);
  if (!c) {
    c = lazy(() => import(`./icons/${name}`) as Promise<{ default: Comp }>);
    cache.set(name, c);
  }
  return c;
}

const Icon = forwardRef(
  ({ name, size = 24, fallback = null, ...props }: IconProps, ref: Ref<SVGSVGElement>) => {
    const LazyIcon = getLazy(name);
    return (
      <Suspense fallback={fallback}>
        <LazyIcon ref={ref} size={size} {...props} />
      </Suspense>
    );
  }
);

Icon.displayName = "Icon";
export default Icon;
