import { forwardRef, type SVGProps, type Ref } from "react";
const WifiSync = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15.965 14.105h-4v-4m0 4L13.5 12.5a5 5 0 0 1 8 1.5m.465 8.105v-4h-4m4 0L20.43 19.71a5 5 0 0 1-8-1.5M2 8.82a15 15 0 0 1 20 0M5 12.86a10 10 0 0 1 3-2.032m.5 5.6h.01" /></svg>);
WifiSync.displayName = "WifiSync";
export default WifiSync;