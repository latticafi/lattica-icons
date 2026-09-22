import { forwardRef, type SVGProps, type Ref } from "react";
const ClockArrowDown = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l2 1" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.337 21.994a10 10 0 1 1 9.588-8.767" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m22 18-4 4-4-4m4 4v-8" /></svg>);
ClockArrowDown.displayName = "ClockArrowDown";
export default ClockArrowDown;