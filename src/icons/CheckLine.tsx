import { forwardRef, type SVGProps, type Ref } from "react";
const CheckLine = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 4 9 15l-5-5m17 9H3" /></svg>);
CheckLine.displayName = "CheckLine";
export default CheckLine;