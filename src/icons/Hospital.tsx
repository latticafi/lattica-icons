import { forwardRef, type SVGProps, type Ref } from "react";
const Hospital = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 7v4m2 10v-3a2 2 0 0 0-4 0v3m4-12h-4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16" /></svg>);
Hospital.displayName = "Hospital";
export default Hospital;