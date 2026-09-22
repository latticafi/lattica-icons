import { forwardRef, type SVGProps, type Ref } from "react";
const Drill = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 18a1 1 0 0 0-1 1 3 3 0 0 0 3 3h5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zm0 0 2-8m8 0H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1m0 0-.81 3.242a1 1 0 0 1-.97.758H8m6-10h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3m4-2h4M7 18l2-8" /></svg>);
Drill.displayName = "Drill";
export default Drill;