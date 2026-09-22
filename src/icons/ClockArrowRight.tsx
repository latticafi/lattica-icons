import { forwardRef, type SVGProps, type Ref } from "react";
const ClockArrowRight = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l2 1" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.5 21.885A10 10 0 1 1 22 12m-8 6h8" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m18 22 4-4-4-4" /></svg>);
ClockArrowRight.displayName = "ClockArrowRight";
export default ClockArrowRight;