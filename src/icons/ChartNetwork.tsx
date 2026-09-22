import { forwardRef, type SVGProps, type Ref } from "react";
const ChartNetwork = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m13.11 7.664 1.78 2.672m-.728 2.452-3.324 1.424M20 4l-6.06 1.515M3 3v16a2 2 0 0 0 2 2h16M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
ChartNetwork.displayName = "ChartNetwork";
export default ChartNetwork;