import { forwardRef, type SVGProps, type Ref } from "react";
const MonitorSpeaker = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5.5 20H8m9-11h.01M20 4h-6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2" /></svg>);
MonitorSpeaker.displayName = "MonitorSpeaker";
export default MonitorSpeaker;