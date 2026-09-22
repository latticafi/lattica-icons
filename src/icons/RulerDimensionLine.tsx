import { forwardRef, type SVGProps, type Ref } from "react";
const RulerDimensionLine = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 15v-3m4 3v-3m4 3v-3M2 8V4m20 2H2m20 2V4M6 15v-3m14 0H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2" /></svg>);
RulerDimensionLine.displayName = "RulerDimensionLine";
export default RulerDimensionLine;