import { forwardRef, type SVGProps, type Ref } from "react";
const ScanEye = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2m9-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18.944 11.67a1 1 0 0 1 0 .66 7.5 7.5 0 0 1-13.888 0 1 1 0 0 1 0-.66 7.5 7.5 0 0 1 13.888 0" /></svg>);
ScanEye.displayName = "ScanEye";
export default ScanEye;