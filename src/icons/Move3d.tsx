import { forwardRef, type SVGProps, type Ref } from "react";
const Move3d = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 19H5V3m0 16 6-6" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m2 6 3-3 3 3m10 10 3 3-3 3" /></svg>);
Move3d.displayName = "Move3d";
export default Move3d;