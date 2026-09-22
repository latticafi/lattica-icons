import { forwardRef, type SVGProps, type Ref } from "react";
const VirusOff = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.01 10h.01M12 14.991h.01M12 22v-3m4.95-2.05A7 7 0 0 1 5 12m7-10v3m1 17h-2m2-20h-2m5.5 17.794-1-1.733m1-13.856-1 1.732m3.391 7.298a7 7 0 0 0-8.126-8.126M19.794 7.5l-1.732 1M2 12h3m0 0a7 7 0 0 1 2.05-4.95M2 13v-2m0-9 20 20m0-10h-3m3 1v-2M4.206 16.5l1.732-1m-1.732-8 1.732 1M7.5 19.794l1-1.733M9 12h.01" /></svg>);
VirusOff.displayName = "VirusOff";
export default VirusOff;