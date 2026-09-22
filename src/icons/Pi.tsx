import { forwardRef, type SVGProps, type Ref } from "react";
const Pi = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 4v16M4 7c0-1.7 1.3-3 3-3h13" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 20c-1.7 0-3-1.3-3-3V4" /></svg>);
Pi.displayName = "Pi";
export default Pi;