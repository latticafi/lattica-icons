import { forwardRef, type SVGProps, type Ref } from "react";
const ArrowUpDown = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m13 16 4 4 4-4m-4 4V4m-6 4L7 4 3 8m4-4v16" /></svg>);
ArrowUpDown.displayName = "ArrowUpDown";
export default ArrowUpDown;