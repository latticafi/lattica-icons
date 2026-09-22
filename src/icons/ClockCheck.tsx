import { forwardRef, type SVGProps, type Ref } from "react";
const ClockCheck = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21.95 13a10 10 0 1 0-8.685 8.92" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m0 5 2 2 4-4" /></svg>);
ClockCheck.displayName = "ClockCheck";
export default ClockCheck;