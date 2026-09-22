import { forwardRef, type SVGProps, type Ref } from "react";
const BedDouble = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 10H4a2 2 0 0 0-2 2v8m2-10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4m0 0a2 2 0 0 1 2 2v8M12 4v6M2 18h20" /></svg>);
BedDouble.displayName = "BedDouble";
export default BedDouble;