import { forwardRef, type SVGProps, type Ref } from "react";
const TimerOff = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 2h4m-9.4 9a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7m-7.6-14a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2M2 2l20 20M12 12v-2" /></svg>);
TimerOff.displayName = "TimerOff";
export default TimerOff;