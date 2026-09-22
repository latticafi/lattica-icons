import { forwardRef, type SVGProps, type Ref } from "react";
const Spline = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 17A12 12 0 0 1 17 5" /></svg>);
Spline.displayName = "Spline";
export default Spline;