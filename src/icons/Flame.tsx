import { forwardRef, type SVGProps, type Ref } from "react";
const Flame = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 3q1 4 4 6.5t3 5.5a7 7 0 1 1-14 0 5 5 0 0 1 1-3 2.5 2.5 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" /></svg>);
Flame.displayName = "Flame";
export default Flame;