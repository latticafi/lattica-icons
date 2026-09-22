import { forwardRef, type SVGProps, type Ref } from "react";
const Clapperboard = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m12.296 3.464 3.02 3.956M3 11l17.2-5-.8-2.6c-.3-1-1.4-1.6-2.5-1.3l-13.5 4c-1 .3-1.6 1.4-1.3 2.5zm0 0h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm3.18-5.724 3.1 3.899" /></svg>);
Clapperboard.displayName = "Clapperboard";
export default Clapperboard;