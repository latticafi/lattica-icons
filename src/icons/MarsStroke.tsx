import { forwardRef, type SVGProps, type Ref } from "react";
const MarsStroke = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m14 6 4 4m3-3V3h-4m4 0-7.75 7.75M9 21A6 6 0 1 0 9 9a6 6 0 0 0 0 12" /></svg>);
MarsStroke.displayName = "MarsStroke";
export default MarsStroke;