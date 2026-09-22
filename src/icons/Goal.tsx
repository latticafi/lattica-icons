import { forwardRef, type SVGProps, type Ref } from "react";
const Goal = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 13V2l8 4-8 4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20.561 10.222a9 9 0 1 1-12.55-5.29" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.002 9.997a5 5 0 1 0 8.9 2.02" /></svg>);
Goal.displayName = "Goal";
export default Goal;