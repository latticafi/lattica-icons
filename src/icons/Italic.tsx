import { forwardRef, type SVGProps, type Ref } from "react";
const Italic = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 4h-9m4 16H5M15 4 9 20" /></svg>);
Italic.displayName = "Italic";
export default Italic;