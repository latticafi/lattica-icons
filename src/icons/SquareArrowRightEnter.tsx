import { forwardRef, type SVGProps, type Ref } from "react";
const SquareArrowRightEnter = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m10 8 4 4-4 4m4-4H3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 8V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" /></svg>);
SquareArrowRightEnter.displayName = "SquareArrowRightEnter";
export default SquareArrowRightEnter;