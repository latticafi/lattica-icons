import { forwardRef, type SVGProps, type Ref } from "react";
const LocateOff = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 19v3m4.95-5.05A7 7 0 0 1 5 12m7-10v3m6.89 8.24a6.998 6.998 0 0 0-8.13-8.13M19 12h3M2 12h3m0 0a7 7 0 0 1 2.05-4.95M2 2l20 20" /></svg>);
LocateOff.displayName = "LocateOff";
export default LocateOff;