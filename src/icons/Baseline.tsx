import { forwardRef, type SVGProps, type Ref } from "react";
const Baseline = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 20h16M6 16l6-12 6 12M8 12h8" /></svg>);
Baseline.displayName = "Baseline";
export default Baseline;