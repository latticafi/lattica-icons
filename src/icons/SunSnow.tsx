import { forwardRef, type SVGProps, type Ref } from "react";
const SunSnow = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 21v-1m0-16V3m0 6a3 3 0 1 0 0 6m4 5 1.25-2.5L18 18M14 4l1.25 2.5L18 6" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m17 21-3-6 1.5-3m0 0H22m-6.5 0L14 9l3-6M2 12h1m17-2-1.5 2 1.5 2M3.64 18.36l.7-.7m0-11.32-.7-.7" /></svg>);
SunSnow.displayName = "SunSnow";
export default SunSnow;