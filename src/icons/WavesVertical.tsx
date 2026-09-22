import { forwardRef, type SVGProps, type Ref } from "react";
const WavesVertical = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 2q2 2.5 0 5t0 5 0 5 0 5m7-20q2 2.5 0 5t0 5 0 5 0 5M5 2q2 2.5 0 5t0 5 0 5 0 5" /></svg>);
WavesVertical.displayName = "WavesVertical";
export default WavesVertical;