import { forwardRef, type SVGProps, type Ref } from "react";
const AudioWaveform = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 13a2 2 0 0 0 2-2V7a2 2 0 1 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 1 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2" /></svg>);
AudioWaveform.displayName = "AudioWaveform";
export default AudioWaveform;