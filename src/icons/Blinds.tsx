import { forwardRef, type SVGProps, type Ref } from "react";
const Blinds = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 3h18m-1 4H8m12 4H8m2 8h10M8 15h12M4 3v14m0 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
Blinds.displayName = "Blinds";
export default Blinds;