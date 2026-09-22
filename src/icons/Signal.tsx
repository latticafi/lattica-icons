import { forwardRef, type SVGProps, type Ref } from "react";
const Signal = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 20h.01M7 20v-4m5 4v-8m5 8V8m5-4v16" /></svg>);
Signal.displayName = "Signal";
export default Signal;