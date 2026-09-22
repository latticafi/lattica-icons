import { forwardRef, type SVGProps, type Ref } from "react";
const CableCar = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 3h.01M14 2h.01M2 9l20-5m-10 8V6.5m5 5.5H7a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3m-8 0v5m6-5v5M4 17h16" /></svg>);
CableCar.displayName = "CableCar";
export default CableCar;