import { forwardRef, type SVGProps, type Ref } from "react";
const Clover = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16.17 7.83 2 22M16.17 7.83A2.826 2.826 0 1 0 12 4.02a2.827 2.827 0 1 0-4.17 3.81m8.34 0A2.827 2.827 0 1 1 19.98 12a2.824 2.824 0 0 1 .274 4.076 2.83 2.83 0 0 1-4.084.094M4.02 12a2.827 2.827 0 1 1 3.81-4.17m0 0 8.34 8.34m0 0a2.825 2.825 0 0 1-.094 4.084A2.825 2.825 0 0 1 12 19.98a2.83 2.83 0 0 1-4.076.274 2.826 2.826 0 0 1-.094-4.084A2.831 2.831 0 0 1 4 12" /></svg>);
Clover.displayName = "Clover";
export default Clover;