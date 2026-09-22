import { forwardRef, type SVGProps, type Ref } from "react";
const WifiPen = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 8.82a15 15 0 0 1 20 0M5 12.859a10 10 0 0 1 10.5-2.222m-7 5.792a5 5 0 0 1 3-1.406m9.878 1.603a2.124 2.124 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837c.323-.095.616-.269.854-.506z" /></svg>);
WifiPen.displayName = "WifiPen";
export default WifiPen;