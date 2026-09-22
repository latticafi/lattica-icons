import { forwardRef, type SVGProps, type Ref } from "react";
const CircleArrowOutDownRight = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 22a10 10 0 1 1 10-10m0 10L12 12m4 10h6v-6" /></svg>);
CircleArrowOutDownRight.displayName = "CircleArrowOutDownRight";
export default CircleArrowOutDownRight;