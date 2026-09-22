import { forwardRef, type SVGProps, type Ref } from "react";
const CalendarFold = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 2v3m5 10V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10m6-6h-5a1 1 0 0 0-1 1v5m6-6a2.4 2.4 0 0 1-.706 1.706l-3.588 3.588A2.4 2.4 0 0 1 15 21M3 9h18M8 2v3" /></svg>);
CalendarFold.displayName = "CalendarFold";
export default CalendarFold;