import { forwardRef, type SVGProps, type Ref } from "react";
const SquareCheckBig = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m9 11 3 3L22 4" /></svg>);
SquareCheckBig.displayName = "SquareCheckBig";
export default SquareCheckBig;