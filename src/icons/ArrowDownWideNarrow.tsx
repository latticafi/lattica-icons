import { forwardRef, type SVGProps, type Ref } from "react";
const ArrowDownWideNarrow = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m11 16-4 4-4-4m4 4V4m4 0h10M11 8h7m-7 4h4" /></svg>);
ArrowDownWideNarrow.displayName = "ArrowDownWideNarrow";
export default ArrowDownWideNarrow;