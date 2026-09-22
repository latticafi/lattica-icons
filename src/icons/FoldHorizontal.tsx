import { forwardRef, type SVGProps, type Ref } from "react";
const FoldHorizontal = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 12h6M5 9l3 3-3 3m17-3h-6m3 3-3-3 3-3m-7-7v2m0 4v2m0 4v2m0 4v2" /></svg>);
FoldHorizontal.displayName = "FoldHorizontal";
export default FoldHorizontal;