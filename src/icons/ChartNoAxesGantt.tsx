import { forwardRef, type SVGProps, type Ref } from "react";
const ChartNoAxesGantt = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 5h12M4 12h10m-2 7h8" /></svg>);
ChartNoAxesGantt.displayName = "ChartNoAxesGantt";
export default ChartNoAxesGantt;