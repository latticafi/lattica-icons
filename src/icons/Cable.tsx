import { forwardRef, type SVGProps, type Ref } from "react";
const Cable = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1zm0 0v2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 14V6.5a3.5 3.5 0 1 0-7 0v11a3.5 3.5 0 1 1-7 0V10m16 11v-2M3 5V3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 5H3a1 1 0 0 0-1 1v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V6a1 1 0 0 0-1-1m0 0V3" /></svg>);
Cable.displayName = "Cable";
export default Cable;