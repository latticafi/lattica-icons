import { forwardRef, type SVGProps, type Ref } from "react";
const BaggageClaim = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 6H9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1m-2 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-9 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
BaggageClaim.displayName = "BaggageClaim";
export default BaggageClaim;