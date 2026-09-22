import { forwardRef, type SVGProps, type Ref } from "react";
const ZodiacOphiuchus = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 10a6.06 6.06 0 0 1 9 0 6.06 6.06 0 0 0 9 0" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 3v12a6 6 0 1 0 12 0V3" /></svg>);
ZodiacOphiuchus.displayName = "ZodiacOphiuchus";
export default ZodiacOphiuchus;