import { forwardRef, type SVGProps, type Ref } from "react";
const BriefcaseMedical = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 11v4m2-2h-4m6-7V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m10 0v14M6 6v14" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 6H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2" /></svg>);
BriefcaseMedical.displayName = "BriefcaseMedical";
export default BriefcaseMedical;