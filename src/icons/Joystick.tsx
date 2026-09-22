import { forwardRef, type SVGProps, type Ref } from "react";
const Joystick = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 15v-2m6 2V9m9 8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zm-9-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></svg>);
Joystick.displayName = "Joystick";
export default Joystick;