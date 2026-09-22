import { forwardRef, type SVGProps, type Ref } from "react";
const LineDotRightHorizontal = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 12h12m3 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></svg>);
LineDotRightHorizontal.displayName = "LineDotRightHorizontal";
export default LineDotRightHorizontal;