import { forwardRef, type SVGProps, type Ref } from "react";
const ClockAlert = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m4-2v5m0 4h.01" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21.25 8.2A10 10 0 1 0 16 21.16" /></svg>);
ClockAlert.displayName = "ClockAlert";
export default ClockAlert;