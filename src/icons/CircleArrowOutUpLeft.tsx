import { forwardRef, type SVGProps, type Ref } from "react";
const CircleArrowOutUpLeft = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 2H2v6m0-6 10 10m0-10A10 10 0 1 1 2 12" /></svg>);
CircleArrowOutUpLeft.displayName = "CircleArrowOutUpLeft";
export default CircleArrowOutUpLeft;