import { forwardRef, type SVGProps, type Ref } from "react";
const UsbCPort = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 12h12m0-4H6a4 4 0 1 0 0 8h12a4 4 0 0 0 0-8" /></svg>);
UsbCPort.displayName = "UsbCPort";
export default UsbCPort;