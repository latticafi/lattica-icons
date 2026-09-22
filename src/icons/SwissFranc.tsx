import { forwardRef, type SVGProps, type Ref } from "react";
const SwissFranc = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 21V3h8M6 16h9m-5-6.5h7" /></svg>);
SwissFranc.displayName = "SwissFranc";
export default SwissFranc;