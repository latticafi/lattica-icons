import { forwardRef, type SVGProps, type Ref } from "react";
const CircleEllipsis = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m5-10h.01M12 12h.01M7 12h.01" /></svg>);
CircleEllipsis.displayName = "CircleEllipsis";
export default CircleEllipsis;