import { forwardRef, type SVGProps, type Ref } from "react";
const FerrisWheel = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0-12v4m-5.2 9-3.5 2M20.7 7l-3.5 2M6.8 9 3.3 7m17.4 10-3.5-2M9 22l3-8 3 8m-7 0h8" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 18.7a9 9 0 1 0-12 0" /></svg>);
FerrisWheel.displayName = "FerrisWheel";
export default FerrisWheel;