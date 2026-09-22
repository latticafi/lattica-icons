import { forwardRef, type SVGProps, type Ref } from "react";
const Gpu = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 17h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H2m0 16V3m5 14v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
Gpu.displayName = "Gpu";
export default Gpu;