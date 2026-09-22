import { forwardRef, type SVGProps, type Ref } from "react";
const ChartBarIncreasing = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 3v16a2 2 0 0 0 2 2h16M7 11h8m-8 5h12M7 6h3" /></svg>);
ChartBarIncreasing.displayName = "ChartBarIncreasing";
export default ChartBarIncreasing;