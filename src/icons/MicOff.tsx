import { forwardRef, type SVGProps, type Ref } from "react";
const MicOff = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 19v3m3-12.66V5a3 3 0 0 0-5.68-1.33m7.63 13.28A7 7 0 0 1 5 12v-2m13.89 3.23Q19 12.62 19 12v-2M2 2l20 20" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 9v3a3 3 0 0 0 5.12 2.12" /></svg>);
MicOff.displayName = "MicOff";
export default MicOff;