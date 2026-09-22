import { forwardRef, type SVGProps, type Ref } from "react";
const ClefBass = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 11h.01M19 6h.01M5 8c0-4 4-4 4-4 6 0 6 6 6 6 0 7-10 11-10 11" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
ClefBass.displayName = "ClefBass";
export default ClefBass;