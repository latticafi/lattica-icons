import { forwardRef, type SVGProps, type Ref } from "react";
const ClockArrowLeft = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l1.5.8" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.338 21.994a10 10 0 1 1 9.587-8.767M14 18h8" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m18 22-4-4 4-4" /></svg>);
ClockArrowLeft.displayName = "ClockArrowLeft";
export default ClockArrowLeft;