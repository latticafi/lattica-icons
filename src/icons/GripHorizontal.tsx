import { forwardRef, type SVGProps, type Ref } from "react";
const GripHorizontal = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2" /></svg>);
GripHorizontal.displayName = "GripHorizontal";
export default GripHorizontal;