import { forwardRef, type SVGProps, type Ref } from "react";
const BatteryWarning = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 17h.01M10 7v6m4-7h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2m8-4v-4M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" /></svg>);
BatteryWarning.displayName = "BatteryWarning";
export default BatteryWarning;