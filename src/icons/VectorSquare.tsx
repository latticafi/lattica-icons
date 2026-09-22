import { forwardRef, type SVGProps, type Ref } from "react";
const VectorSquare = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17.055 4.533a24 24 0 0 0-10.11 0m12.522 12.522a24 24 0 0 0 0-10.11m-14.934 0a24 24 0 0 0 0 10.11m2.412 2.412c3.332.717 6.778.717 10.11 0" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0-14a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
VectorSquare.displayName = "VectorSquare";
export default VectorSquare;