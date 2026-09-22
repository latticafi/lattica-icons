import { forwardRef, type SVGProps, type Ref } from "react";
const CircleArrowOutUpRight = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M22 12A10 10 0 1 1 12 2m10 0L12 12m10-4V2h-6" /></svg>);
CircleArrowOutUpRight.displayName = "CircleArrowOutUpRight";
export default CircleArrowOutUpRight;