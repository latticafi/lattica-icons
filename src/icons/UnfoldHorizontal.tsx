import { forwardRef, type SVGProps, type Ref } from "react";
const UnfoldHorizontal = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 12h6m-3-3 3 3-3 3M8 12H2m3 3-3-3 3-3m7-7v2m0 4v2m0 4v2m0 4v2" /></svg>);
UnfoldHorizontal.displayName = "UnfoldHorizontal";
export default UnfoldHorizontal;