import { forwardRef, type SVGProps, type Ref } from "react";
const ArrowDownUp = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m11 16-4 4-4-4m4 4V4m6 4 4-4 4 4m-4-4v16" /></svg>);
ArrowDownUp.displayName = "ArrowDownUp";
export default ArrowDownUp;