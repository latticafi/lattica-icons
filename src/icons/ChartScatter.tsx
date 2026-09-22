import { forwardRef, type SVGProps, type Ref } from "react";
const ChartScatter = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m11-2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-7 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-4 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m10-2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 3v16a2 2 0 0 0 2 2h16" /></svg>);
ChartScatter.displayName = "ChartScatter";
export default ChartScatter;