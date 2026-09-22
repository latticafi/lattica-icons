import { forwardRef, type SVGProps, type Ref } from "react";
const ZodiacScorpio = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 19V5.5m0 0a2.5 2.5 0 0 1 5 0V17a2 2 0 0 0 2 2h5M10 5.5a2.5 2.5 0 1 0-5 0M19 22l3-3-3-3M5 19V5.5m0 0A2.5 2.5 0 0 0 2.5 3" /></svg>);
ZodiacScorpio.displayName = "ZodiacScorpio";
export default ZodiacScorpio;