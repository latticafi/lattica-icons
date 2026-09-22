import { forwardRef, type SVGProps, type Ref } from "react";
const CircleCheckBig = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21.801 10A10 10 0 1 1 17 3.335" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m9 11 3 3L22 4" /></svg>);
CircleCheckBig.displayName = "CircleCheckBig";
export default CircleCheckBig;