import { forwardRef, type SVGProps, type Ref } from "react";
const ParkingMeter = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11 15h2m-1-3v3m0 4v3m3.282-3a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 9a3 3 0 1 1 6 0" /></svg>);
ParkingMeter.displayName = "ParkingMeter";
export default ParkingMeter;