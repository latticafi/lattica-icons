import { forwardRef, type SVGProps, type Ref } from "react";
const CloudMoonRain = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11 20v2m7.376-7.488a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24M7 19v2" /></svg>);
CloudMoonRain.displayName = "CloudMoonRain";
export default CloudMoonRain;