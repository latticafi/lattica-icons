import { forwardRef, type SVGProps, type Ref } from "react";
const ZodiacCapricorn = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11 21a3 3 0 0 0 3-3V6.5a3.5 3.5 0 1 0-7 0M7 19V6a3 3 0 0 0-3-3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></svg>);
ZodiacCapricorn.displayName = "ZodiacCapricorn";
export default ZodiacCapricorn;