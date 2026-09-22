import { forwardRef, type SVGProps, type Ref } from "react";
const CandyCane = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m10.8 5 2.111 4.223M10.8 5 2.2 19a2.016 2.016 0 0 0 3.5 2l8.572-14a2 2 0 1 1 3.464 2 2 2 0 1 0 3.464 2 6.003 6.003 0 1 0-10.4-6m6.95 2L15 2.1M4.874 14.647l2.12 4.24m.912-9.175 2.005 4.41" /></svg>);
CandyCane.displayName = "CandyCane";
export default CandyCane;