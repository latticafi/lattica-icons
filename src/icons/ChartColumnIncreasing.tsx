import { forwardRef, type SVGProps, type Ref } from "react";
const ChartColumnIncreasing = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13 17V9m5 8V5M3 3v16a2 2 0 0 0 2 2h16M8 17v-3" /></svg>);
ChartColumnIncreasing.displayName = "ChartColumnIncreasing";
export default ChartColumnIncreasing;