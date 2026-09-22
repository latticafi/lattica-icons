import { forwardRef, type SVGProps, type Ref } from "react";
const TrianglesCenterlineDashedHorizontal = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 12H8m8 0h-2m8 0h-2M4 12H2m5.298 8.288A1 1 0 0 0 8 22h8a1 1 0 0 0 .703-1.712l-3.991-3.99a1 1 0 0 0-1.424-.001zm0-16.576A1 1 0 0 1 8 2h8a1 1 0 0 1 .703 1.712l-3.991 3.99a1 1 0 0 1-1.424.001z" /></svg>);
TrianglesCenterlineDashedHorizontal.displayName = "TrianglesCenterlineDashedHorizontal";
export default TrianglesCenterlineDashedHorizontal;