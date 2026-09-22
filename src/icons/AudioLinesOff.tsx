import { forwardRef, type SVGProps, type Ref } from "react";
const AudioLinesOff = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 10v11m0-18v1.35M14 14v1m0-7v.35M18 5v7.35M2 10v3M2 2l20 20m0-12v3M6 6v11" /></svg>);
AudioLinesOff.displayName = "AudioLinesOff";
export default AudioLinesOff;