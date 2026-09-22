import { forwardRef, type SVGProps, type Ref } from "react";
const Calendars = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m3.726 17.01A2 2 0 0 1 14 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2m14-6v2M2 13h2m4-5h14" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 3H10a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2" /></svg>);
Calendars.displayName = "Calendars";
export default Calendars;