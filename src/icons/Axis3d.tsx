import { forwardRef, type SVGProps, type Ref } from "react";
const Axis3d = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5 15 9M4 4v15a1 1 0 0 0 .293.707m0 0A1 1 0 0 0 5 20h15m-15.707-.293L6 18m3-3 1.5-1.5" /></svg>);
Axis3d.displayName = "Axis3d";
export default Axis3d;