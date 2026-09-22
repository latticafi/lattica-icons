import { forwardRef, type SVGProps, type Ref } from "react";
const EggFried = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8" /></svg>);
EggFried.displayName = "EggFried";
export default EggFried;