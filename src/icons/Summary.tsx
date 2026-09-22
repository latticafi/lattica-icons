import { forwardRef, type SVGProps, type Ref } from "react";
const Summary = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 4H7m11 12 3 3-3 3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 4v13a2 2 0 0 0 2 2h16M7 14h7M7 9h12" /></svg>);
Summary.displayName = "Summary";
export default Summary;