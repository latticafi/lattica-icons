import { forwardRef, type SVGProps, type Ref } from "react";
const ClockArrowUp = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l1.56.78" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.227 21.925a10 10 0 1 1 8.767-9.588" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m22 18-4-4-4 4m4-4v8" /></svg>);
ClockArrowUp.displayName = "ClockArrowUp";
export default ClockArrowUp;