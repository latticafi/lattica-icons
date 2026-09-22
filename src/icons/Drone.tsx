import { forwardRef, type SVGProps, type Ref } from "react";
const Drone = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 10 7 7m3 7-3 3m7-7 3-3m-3 7 3 3M14.205 4.14a4 4 0 1 1 5.439 5.862M19.637 14a4 4 0 0 1 .31 5.735 4 4 0 0 1-5.742.133M4.367 10a4 4 0 1 1 5.438-5.862m-.01 15.724a3.999 3.999 0 1 1-5.429-5.873M13 8h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1" /></svg>);
Drone.displayName = "Drone";
export default Drone;