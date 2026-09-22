import { forwardRef, type SVGProps, type Ref } from "react";
const CalendarX2 = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 2v3m1 11 5 5m-5 0 5-5m-1-4V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8M3 9h18M8 2v3" /></svg>);
CalendarX2.displayName = "CalendarX2";
export default CalendarX2;