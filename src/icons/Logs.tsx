import { forwardRef, type SVGProps, type Ref } from "react";
const Logs = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 5h1m-1 7h1m-1 7h1M8 5h1m-1 7h1m-1 7h1m4-14h8m-8 7h8m-8 7h8" /></svg>);
Logs.displayName = "Logs";
export default Logs;