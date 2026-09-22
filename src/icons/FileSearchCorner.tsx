import { forwardRef, type SVGProps, type Ref } from "react";
const FileSearchCorner = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11.1 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.589 3.588A2.4 2.4 0 0 1 20 8v3.25" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 2v5a1 1 0 0 0 1 1h5m1 14-2.88-2.88M16 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></svg>);
FileSearchCorner.displayName = "FileSearchCorner";
export default FileSearchCorner;