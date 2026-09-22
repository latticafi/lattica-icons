import { forwardRef, type SVGProps, type Ref } from "react";
const RotateCcwKey = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 7v6m0-4h2M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 3v5h5m4 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
RotateCcwKey.displayName = "RotateCcwKey";
export default RotateCcwKey;