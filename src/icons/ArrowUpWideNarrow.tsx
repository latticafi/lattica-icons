import { forwardRef, type SVGProps, type Ref } from "react";
const ArrowUpWideNarrow = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11 8 7 4 3 8m4-4v16m4-8h10m-10 4h7m-7 4h4" /></svg>);
ArrowUpWideNarrow.displayName = "ArrowUpWideNarrow";
export default ArrowUpWideNarrow;