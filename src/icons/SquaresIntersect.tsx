import { forwardRef, type SVGProps, type Ref } from "react";
const SquaresIntersect = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 22a2 2 0 0 1-2-2m6-18a2 2 0 0 1 2 2m0 18h-2M2 10V8m0-4a2 2 0 0 1 2-2m16 6a2 2 0 0 1 2 2m0 4v2m0 4a2 2 0 0 1-2 2M4 16a2 2 0 0 1-2-2M8 2h2m-2 8a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1z" /></svg>);
SquaresIntersect.displayName = "SquaresIntersect";
export default SquaresIntersect;