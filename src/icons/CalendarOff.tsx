import { forwardRef, type SVGProps, type Ref } from "react";
const CalendarOff = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 2v3M2 2l20 20M21 9h-5.5M3 9h6M3.586 3.586A2 2 0 0 0 3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.414-.586M8.656 3H19a2 2 0 0 1 2 2v10.344" /></svg>);
CalendarOff.displayName = "CalendarOff";
export default CalendarOff;