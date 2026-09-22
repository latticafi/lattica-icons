import { forwardRef, type SVGProps, type Ref } from "react";
const LineStyle = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11 5h2m2 7h6m-2-7h2M3 12h6m-6 7h18M3 5h2" /></svg>);
LineStyle.displayName = "LineStyle";
export default LineStyle;