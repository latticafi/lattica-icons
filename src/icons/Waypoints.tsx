import { forwardRef, type SVGProps, type Ref } from "react";
const Waypoints = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m10.586 5.414-5.172 5.172m13.172 2.828-5.172 5.172M6 12h12m-6 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0-16a2 2 0 1 0 0-4 2 2 0 0 0 0 4m8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
Waypoints.displayName = "Waypoints";
export default Waypoints;