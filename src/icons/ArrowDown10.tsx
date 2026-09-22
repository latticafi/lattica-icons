import { forwardRef, type SVGProps, type Ref } from "react";
const ArrowDown10 = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m11 16-4 4-4-4m4 4V4m10 6V4h-2m0 6h4m0 6a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0z" /></svg>);
ArrowDown10.displayName = "ArrowDown10";
export default ArrowDown10;