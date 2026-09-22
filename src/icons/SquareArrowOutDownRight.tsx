import { forwardRef, type SVGProps, type Ref } from "react";
const SquareArrowOutDownRight = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6m10 0-9-9m3 9h6v-6" /></svg>);
SquareArrowOutDownRight.displayName = "SquareArrowOutDownRight";
export default SquareArrowOutDownRight;