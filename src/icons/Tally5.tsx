import { forwardRef, type SVGProps, type Ref } from "react";
const Tally5 = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 4v16M9 4v16m5-16v16m5-16v16m3-14L2 18" /></svg>);
Tally5.displayName = "Tally5";
export default Tally5;