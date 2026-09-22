import { forwardRef, type SVGProps, type Ref } from "react";
const BatteryPlus = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 9v6m2.543-9H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.605M22 14v-4M7 12h6m-5.394 6H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.606" /></svg>);
BatteryPlus.displayName = "BatteryPlus";
export default BatteryPlus;