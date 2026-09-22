import { forwardRef, type SVGProps, type Ref } from "react";
const HardHat = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m0-4a6 6 0 0 1 6 6v3M4 15v-3a6 6 0 0 1 6-6m11 9H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" /></svg>);
HardHat.displayName = "HardHat";
export default HardHat;