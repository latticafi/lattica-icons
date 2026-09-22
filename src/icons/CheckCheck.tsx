import { forwardRef, type SVGProps, type Ref } from "react";
const CheckCheck = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 6 7 17l-5-5m20-2-7.5 7.5L13 16" /></svg>);
CheckCheck.displayName = "CheckCheck";
export default CheckCheck;