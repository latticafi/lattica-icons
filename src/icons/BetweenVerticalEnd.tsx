import { forwardRef, type SVGProps, type Ref } from "react";
const BetweenVerticalEnd = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 3H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m0 19 3-3 3 3m5-19h-5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1" /></svg>);
BetweenVerticalEnd.displayName = "BetweenVerticalEnd";
export default BetweenVerticalEnd;