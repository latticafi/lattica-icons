import { forwardRef, type SVGProps, type Ref } from "react";
const ClipboardClock = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 14v2.2l1.6 1M16 4h2a2 2 0 0 1 2 2v.832M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1" /></svg>);
ClipboardClock.displayName = "ClipboardClock";
export default ClipboardClock;