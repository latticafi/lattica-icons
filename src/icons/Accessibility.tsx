import { forwardRef, type SVGProps, type Ref } from "react";
const Accessibility = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m2 14 1-7-6 1M5 8l3-3 5.5 3-2.36 3.5m-6.9 3a5 5 0 0 0 6.88 6" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.76 17.5a5 5 0 0 0-6.88-6" /></svg>);
Accessibility.displayName = "Accessibility";
export default Accessibility;