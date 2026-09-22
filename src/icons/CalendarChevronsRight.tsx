import { forwardRef, type SVGProps, type Ref } from "react";
const CalendarChevronsRight = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m13 21 3-3-3-3m3-13v3m3 16 3-3-3-3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 11.5V5.05a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2L9 21M3 9h18M8 2v3" /></svg>);
CalendarChevronsRight.displayName = "CalendarChevronsRight";
export default CalendarChevronsRight;