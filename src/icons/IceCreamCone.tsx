import { forwardRef, type SVGProps, type Ref } from "react";
const IceCreamCone = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11M7 11h10M7 11a2 2 0 1 1 0-4 5 5 0 1 1 10 0 2 2 0 0 1 0 4" /></svg>);
IceCreamCone.displayName = "IceCreamCone";
export default IceCreamCone;