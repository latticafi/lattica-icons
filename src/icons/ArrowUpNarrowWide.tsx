import { forwardRef, type SVGProps, type Ref } from "react";
const ArrowUpNarrowWide = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11 8 7 4 3 8m4-4v16m4-8h4m-4 4h7m-7 4h10" /></svg>);
ArrowUpNarrowWide.displayName = "ArrowUpNarrowWide";
export default ArrowUpNarrowWide;