import { forwardRef, type SVGProps, type Ref } from "react";
const Orbit = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20.341 6.484A10 10 0 0 1 10.266 21.85m-6.607-4.334A10 10 0 0 1 13.74 2.152M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
Orbit.displayName = "Orbit";
export default Orbit;