import { forwardRef, type SVGProps, type Ref } from "react";
const RobotArm = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 21 7.5 8.322M14 7l1.75-3.767a.5.5 0 0 1 .662-.172L20 5.005M14 7l1.75 3.77a.5.5 0 0 0 .662.172L20 8.998M14 7H8M3.486 21h10M5 21V8.732M6 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
RobotArm.displayName = "RobotArm";
export default RobotArm;