import { forwardRef, type SVGProps, type Ref } from "react";
const BluetoothSearching = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7 7 10 10-5 5V2l5 5L7 17m13.83-2.17a4 4 0 0 0 0-5.66M18 12h.01" /></svg>);
BluetoothSearching.displayName = "BluetoothSearching";
export default BluetoothSearching;