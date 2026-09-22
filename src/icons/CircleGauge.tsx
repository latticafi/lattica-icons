import { forwardRef, type SVGProps, type Ref } from "react";
const CircleGauge = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15.6 2.7a10 10 0 1 0 5.7 5.7" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4m1.4-3.4L19 5" /></svg>);
CircleGauge.displayName = "CircleGauge";
export default CircleGauge;