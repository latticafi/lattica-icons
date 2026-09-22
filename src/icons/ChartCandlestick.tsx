import { forwardRef, type SVGProps, type Ref } from "react";
const ChartCandlestick = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 5v4m1 0H8a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1m-1 6v2m8-14v2m1 0h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 13v3M3 3v16a2 2 0 0 0 2 2h16" /></svg>);
ChartCandlestick.displayName = "ChartCandlestick";
export default ChartCandlestick;