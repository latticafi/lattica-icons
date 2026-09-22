import { forwardRef, type SVGProps, type Ref } from "react";
const MidiPort = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M15 2.458V5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V2.458M16 16h.01M18 12h.01M6 12h.01M8 16h.01" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" /></svg>);
MidiPort.displayName = "MidiPort";
export default MidiPort;