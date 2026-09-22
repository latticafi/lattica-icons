import { forwardRef, type SVGProps, type Ref } from "react";
const EyeClosed = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m15 18-.722-3.25M2 8a10.645 10.645 0 0 0 20 0m-2 7-1.726-2.05M4 15l1.726-2.05M9 18l.722-3.25" /></svg>);
EyeClosed.displayName = "EyeClosed";
export default EyeClosed;