import { forwardRef, type SVGProps, type Ref } from "react";
const Thermometer = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 14.54V4a2 2 0 1 0-4 0v10.54a4 4 0 1 0 4 0" /></svg>);
Thermometer.displayName = "Thermometer";
export default Thermometer;