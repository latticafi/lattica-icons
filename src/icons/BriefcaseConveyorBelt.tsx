import { forwardRef, type SVGProps, type Ref } from "react";
const BriefcaseConveyorBelt = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 20v2m4-2v2m4-2v2m3-2H3m3 0v2m2-6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 6H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2" /></svg>);
BriefcaseConveyorBelt.displayName = "BriefcaseConveyorBelt";
export default BriefcaseConveyorBelt;