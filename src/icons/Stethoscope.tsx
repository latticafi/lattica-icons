import { forwardRef, type SVGProps, type Ref } from "react";
const Stethoscope = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11 2v2M5 2v2m0-1H4a2 2 0 0 0-2 2v4a6 6 0 1 0 12 0V5a2 2 0 0 0-2-2h-1" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 15a6 6 0 1 0 12 0v-3m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
Stethoscope.displayName = "Stethoscope";
export default Stethoscope;