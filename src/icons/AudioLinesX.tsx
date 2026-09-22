import { forwardRef, type SVGProps, type Ref } from "react";
const AudioLinesX = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 3v18m4-13v6.35M17 17l5 5M18 5v8.1M2 10v3m20-3v3m0 4-5 5M6 6v11" /></svg>);
AudioLinesX.displayName = "AudioLinesX";
export default AudioLinesX;