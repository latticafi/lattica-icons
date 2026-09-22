import { forwardRef, type SVGProps, type Ref } from "react";
const BluetoothOff = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m17 17-5 5V12l-5 5M2 2l20 20M14.5 9.5 17 7l-5-5v4.5" /></svg>);
BluetoothOff.displayName = "BluetoothOff";
export default BluetoothOff;