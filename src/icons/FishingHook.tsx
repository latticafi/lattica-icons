import { forwardRef, type SVGProps, type Ref } from "react";
const FishingHook = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m17.586 11.414-5.93 5.93a5.657 5.657 0 0 1-8-8l3.137-3.137a.707.707 0 0 1 1.207.5V10m12.414-1.414L22 7" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
FishingHook.displayName = "FishingHook";
export default FishingHook;