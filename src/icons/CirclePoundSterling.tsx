import { forwardRef, type SVGProps, type Ref } from "react";
const CirclePoundSterling = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 16V9.5a2.5 2.5 0 0 1 5 0M8 12h4m-4 4h7" /></svg>);
CirclePoundSterling.displayName = "CirclePoundSterling";
export default CirclePoundSterling;