import { forwardRef, type SVGProps, type Ref } from "react";
const TrendingUpDown = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828 21 21m-5 0h5v-5m0-13-9 9-4-4-6 6" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 8V3h-5" /></svg>);
TrendingUpDown.displayName = "TrendingUpDown";
export default TrendingUpDown;