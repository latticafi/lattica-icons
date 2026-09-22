import { forwardRef, type SVGProps, type Ref } from "react";
const ClockPlus = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l3.644 1.822M16 19h6m-3-3v6" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21.92 13.267a10 10 0 1 0-8.653 8.653" /></svg>);
ClockPlus.displayName = "ClockPlus";
export default ClockPlus;