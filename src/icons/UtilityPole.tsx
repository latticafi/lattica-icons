import { forwardRef, type SVGProps, type Ref } from "react";
const UtilityPole = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M2 5h20M3 3v2m4-2v2m10-2v2m4-2v2m-2 0-7 7-7-7" /></svg>);
UtilityPole.displayName = "UtilityPole";
export default UtilityPole;