import { forwardRef, type SVGProps, type Ref } from "react";
const ArrowsUpFromLine = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 6 7 3 4 6m3-3v14M20 6l-3-3-3 3m3-3v14M4 21h16" /></svg>);
ArrowsUpFromLine.displayName = "ArrowsUpFromLine";
export default ArrowsUpFromLine;