import { forwardRef, type SVGProps, type Ref } from "react";
const ArrowUp10 = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11 8 7 4 3 8m4-4v16m10-10V4h-2m0 6h4m0 6a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0z" /></svg>);
ArrowUp10.displayName = "ArrowUp10";
export default ArrowUp10;