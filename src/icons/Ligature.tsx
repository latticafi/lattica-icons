import { forwardRef, type SVGProps, type Ref } from "react";
const Ligature = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 12h2v8m-2 0h4M6 12h4m-4 8h4m-2 0V8a4 4 0 0 1 7.464-2" /></svg>);
Ligature.displayName = "Ligature";
export default Ligature;