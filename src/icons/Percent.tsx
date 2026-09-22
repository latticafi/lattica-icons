import { forwardRef, type SVGProps, type Ref } from "react";
const Percent = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 5 5 19M6.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m11 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" /></svg>);
Percent.displayName = "Percent";
export default Percent;