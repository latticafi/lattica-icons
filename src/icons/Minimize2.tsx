import { forwardRef, type SVGProps, type Ref } from "react";
const Minimize2 = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m14 10 7-7m-7 1v6h6M3 21l7-7m0 6v-6H4" /></svg>);
Minimize2.displayName = "Minimize2";
export default Minimize2;