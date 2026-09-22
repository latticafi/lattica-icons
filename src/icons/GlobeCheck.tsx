import { forwardRef, type SVGProps, type Ref } from "react";
const GlobeCheck = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m15 6 2 2 4-4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 12h20A10 10 0 1 1 12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 4-10" /></svg>);
GlobeCheck.displayName = "GlobeCheck";
export default GlobeCheck;