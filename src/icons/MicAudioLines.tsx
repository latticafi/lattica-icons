import { forwardRef, type SVGProps, type Ref } from "react";
const MicAudioLines = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 3v2.341M12 17v4m2-16v.341M18 5v13M2 10v3m20-3v3M6 6v11m3 4h6m-1-10a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0z" /></svg>);
MicAudioLines.displayName = "MicAudioLines";
export default MicAudioLines;