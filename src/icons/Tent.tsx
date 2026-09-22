import { forwardRef, type SVGProps, type Ref } from "react";
const Tent = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3.5 21 14 3m6.5 18L10 3m5.5 18L12 15l-3.5 6M2 21h20" /></svg>);
Tent.displayName = "Tent";
export default Tent;