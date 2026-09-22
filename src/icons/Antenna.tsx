import { forwardRef, type SVGProps, type Ref } from "react";
const Antenna = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 12 7 2m0 10 5-10m0 10 5-10m0 10 5-10M4.5 7h15M12 16v6" /></svg>);
Antenna.displayName = "Antenna";
export default Antenna;