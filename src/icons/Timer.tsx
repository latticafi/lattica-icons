import { forwardRef, type SVGProps, type Ref } from "react";
const Timer = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 2h4m-2 12 3-3m-3 11a8 8 0 1 0 0-16 8 8 0 0 0 0 16" /></svg>);
Timer.displayName = "Timer";
export default Timer;