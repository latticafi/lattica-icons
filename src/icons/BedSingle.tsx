import { forwardRef, type SVGProps, type Ref } from "react";
const BedSingle = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 10H5a2 2 0 0 0-2 2v8m2-10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4m0 0a2 2 0 0 1 2 2v8M3 18h18" /></svg>);
BedSingle.displayName = "BedSingle";
export default BedSingle;