import { forwardRef, type SVGProps, type Ref } from "react";
const NavigationOff = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.43 8.43 3 11l8 2 2 8 2.57-5.43m1.82-3.84L22 2l-9.73 4.61M2 2l20 20" /></svg>);
NavigationOff.displayName = "NavigationOff";
export default NavigationOff;