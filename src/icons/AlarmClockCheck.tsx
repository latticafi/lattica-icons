import { forwardRef, type SVGProps, type Ref } from "react";
const AlarmClockCheck = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 3 2 6m20 0-3-3M6.38 18.7 4 21m13.64-2.33L20 21M9 13l2 2 4-4" /></svg>);
AlarmClockCheck.displayName = "AlarmClockCheck";
export default AlarmClockCheck;