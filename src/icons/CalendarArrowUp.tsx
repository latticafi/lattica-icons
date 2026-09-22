import { forwardRef, type SVGProps, type Ref } from "react";
const CalendarArrowUp = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m22 17-4-4-4 4m4-4v8M16 2v3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 10.343V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9M3 9h18M8 2v3" /></svg>);
CalendarArrowUp.displayName = "CalendarArrowUp";
export default CalendarArrowUp;