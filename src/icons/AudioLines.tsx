import { forwardRef, type SVGProps, type Ref } from "react";
const AudioLines = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 10v3m4-7v11m4-14v18m4-13v7m4-10v13m4-8v3" /></svg>);
AudioLines.displayName = "AudioLines";
export default AudioLines;