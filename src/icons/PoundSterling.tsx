import { forwardRef, type SVGProps, type Ref } from "react";
const PoundSterling = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 7c0-5.333-8-5.333-8 0v14m-4 0h12M6 13h10" /></svg>);
PoundSterling.displayName = "PoundSterling";
export default PoundSterling;