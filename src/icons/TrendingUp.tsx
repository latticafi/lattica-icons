import { forwardRef, type SVGProps, type Ref } from "react";
const TrendingUp = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 7h6v6" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m22 7-8.5 8.5-5-5L2 17" /></svg>);
TrendingUp.displayName = "TrendingUp";
export default TrendingUp;