import { forwardRef, type SVGProps, type Ref } from "react";
const SquareArrowOutDownLeft = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6m0 10 9-9m-9 3v6h6" /></svg>);
SquareArrowOutDownLeft.displayName = "SquareArrowOutDownLeft";
export default SquareArrowOutDownLeft;