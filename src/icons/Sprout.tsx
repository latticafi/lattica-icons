import { forwardRef, type SVGProps, type Ref } from "react";
const Sprout = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4m0 0c0 2 1 3 1 5a5 5 0 0 1-1 3m0-8a5 5 0 0 0-8-4 5 5 0 0 0 8 4m-7 8h14" /></svg>);
Sprout.displayName = "Sprout";
export default Sprout;