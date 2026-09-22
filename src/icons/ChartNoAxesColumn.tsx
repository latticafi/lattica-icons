import { forwardRef, type SVGProps, type Ref } from "react";
const ChartNoAxesColumn = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 21v-6m7 6V3m7 18V9" /></svg>);
ChartNoAxesColumn.displayName = "ChartNoAxesColumn";
export default ChartNoAxesColumn;