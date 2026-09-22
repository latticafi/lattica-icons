import { forwardRef, type SVGProps, type Ref } from "react";
const ArrowLeftRight = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 11 4 7l4-4M4 7h16m-4 6 4 4-4 4m4-4H4" /></svg>);
ArrowLeftRight.displayName = "ArrowLeftRight";
export default ArrowLeftRight;