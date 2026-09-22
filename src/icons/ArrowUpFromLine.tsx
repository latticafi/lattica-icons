import { forwardRef, type SVGProps, type Ref } from "react";
const ArrowUpFromLine = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m6 9 6-6 6 6m-6-6v14m-7 4h14" /></svg>);
ArrowUpFromLine.displayName = "ArrowUpFromLine";
export default ArrowUpFromLine;