import { forwardRef, type SVGProps, type Ref } from "react";
const PawPrint = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4m7 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4m2 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045q-.64-2.065-2.7-2.705A3.5 3.5 0 0 1 5.5 10z" /></svg>);
PawPrint.displayName = "PawPrint";
export default PawPrint;