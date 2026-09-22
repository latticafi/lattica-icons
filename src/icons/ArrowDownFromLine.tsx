import { forwardRef, type SVGProps, type Ref } from "react";
const ArrowDownFromLine = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 3H5m7 18V7m6 8-6 6-6-6" /></svg>);
ArrowDownFromLine.displayName = "ArrowDownFromLine";
export default ArrowDownFromLine;