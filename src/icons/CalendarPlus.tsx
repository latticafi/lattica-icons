import { forwardRef, type SVGProps, type Ref } from "react";
const CalendarPlus = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 18h6M16 2v3m3 10v6m2-9.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.3M3 9h18M8 2v3" /></svg>);
CalendarPlus.displayName = "CalendarPlus";
export default CalendarPlus;