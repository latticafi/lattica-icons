import { forwardRef, type SVGProps, type Ref } from "react";
const HdmiPort = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 12h8m6-3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h.5a2 2 0 0 1 1.6.8l.3.4A2 2 0 0 0 7 16h10a2 2 0 0 0 1.6-.8l.3-.4a2 2 0 0 1 1.6-.8h.5a1 1 0 0 0 1-1z" /></svg>);
HdmiPort.displayName = "HdmiPort";
export default HdmiPort;