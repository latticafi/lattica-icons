import { forwardRef, type SVGProps, type Ref } from "react";
const Usb = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2M4 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4.7 19.3 19 5M9.26 7.68 5 12l2 5m3-3 5 2 3.5-3.5M21 3l-3 1 2 2z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m18 12 1-1 1 1-1 1z" /></svg>);
Usb.displayName = "Usb";
export default Usb;