import { forwardRef, type SVGProps, type Ref } from "react";
const LampDesk = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m14.207 4.793-2.5-2.5a1 1 0 0 0-1.414 0l-2 2a1 1 0 0 0 0 1.414l2.5 2.5m3.414-3.414 5.994 1.227a1 1 0 0 1 .506 1.687l-7 7a1 1 0 0 1-1.687-.506l-1.227-5.994m3.414-3.414-3.414 3.414M3 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM9.086 6.5l-4.793 4.793a1 1 0 0 0-.18 1.17L7 18" /></svg>);
LampDesk.displayName = "LampDesk";
export default LampDesk;