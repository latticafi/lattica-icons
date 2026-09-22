import { forwardRef, type SVGProps, type Ref } from "react";
const ZodiacAries = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 7.5a4.5 4.5 0 1 1 5 4.5m-5-4.5A4.5 4.5 0 1 0 7 12m5-4.5V21" /></svg>);
ZodiacAries.displayName = "ZodiacAries";
export default ZodiacAries;