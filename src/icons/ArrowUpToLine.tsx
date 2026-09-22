import { forwardRef, type SVGProps, type Ref } from "react";
const ArrowUpToLine = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 3h14M6 13l6-6 6 6m-6-6v14" /></svg>);
ArrowUpToLine.displayName = "ArrowUpToLine";
export default ArrowUpToLine;