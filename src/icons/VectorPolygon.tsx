import { forwardRef, type SVGProps, type Ref } from "react";
const VectorPolygon = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m12.828 4.813 5.344 2.375m-2.403 10.966 3.461-8.307M5.687 14.075l7.625 4.852M9.772 5.579l-4.544 5.842M11 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4m5-12a2 2 0 1 0 0-4 2 2 0 0 0 0 4M4 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
VectorPolygon.displayName = "VectorPolygon";
export default VectorPolygon;