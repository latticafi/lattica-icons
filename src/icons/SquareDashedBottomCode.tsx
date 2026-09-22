import { forwardRef, type SVGProps, type Ref } from "react";
const SquareDashedBottomCode = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 9.5 8 12l2 2.5m4 6.5h1M14 9.5l2 2.5-2 2.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2M9 21h1" /></svg>);
SquareDashedBottomCode.displayName = "SquareDashedBottomCode";
export default SquareDashedBottomCode;