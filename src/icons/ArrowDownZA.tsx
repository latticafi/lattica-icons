import { forwardRef, type SVGProps, type Ref } from "react";
const ArrowDownZA = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m11 16-4 4-4-4m4 4V4m8 0h5l-5 6h5m-5 10v-3.5a2.5 2.5 0 0 1 5 0V20m0-2h-5" /></svg>);
ArrowDownZA.displayName = "ArrowDownZA";
export default ArrowDownZA;