import { forwardRef, type SVGProps, type Ref } from "react";
const BetweenVerticalStart = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 8H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1m6-6-3 3-3-3m11 6h-5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1" /></svg>);
BetweenVerticalStart.displayName = "BetweenVerticalStart";
export default BetweenVerticalStart;