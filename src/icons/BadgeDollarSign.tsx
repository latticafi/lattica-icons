import { forwardRef, type SVGProps, type Ref } from "react";
const BadgeDollarSign = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3.915 6.632A4 4 0 0 0 3.85 8.62a4 4 0 0 0 0 6.76 4 4 0 0 0 4.78 4.77 4 4 0 0 0 6.75 0 4 4 0 0 0 4.77-4.78 4 4 0 0 0 0-6.74 4 4 0 0 0-4.78-4.78 4 4 0 0 0-6.74 0 4 4 0 0 0-4.715 2.782" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 0 1 0 4H8m4 2V6" /></svg>);
BadgeDollarSign.displayName = "BadgeDollarSign";
export default BadgeDollarSign;