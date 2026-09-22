import { forwardRef, type SVGProps, type Ref } from "react";
const RefreshCcw = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 3v5h5m-5 4a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 16h5v5" /></svg>);
RefreshCcw.displayName = "RefreshCcw";
export default RefreshCcw;