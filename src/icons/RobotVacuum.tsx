import { forwardRef, type SVGProps, type Ref } from "react";
const RobotVacuum = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11 17h2m-1-5h.01M17 12a5 5 0 0 0-10 0M19 2v2.8M2 5h2.8M22 5h-2.8M5 2v2.8" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" /></svg>);
RobotVacuum.displayName = "RobotVacuum";
export default RobotVacuum;