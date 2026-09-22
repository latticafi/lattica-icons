import { forwardRef, type SVGProps, type Ref } from "react";
const DatabaseArrowDown = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m22 19-3 3-3-3m3 3v-6m2-3.464V5M3 12c0 .485.354.963 1.03 1.393s1.656.799 2.854 1.075 2.578.45 4.024.51c1.445.059 2.912 0 4.274-.172" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 5v14c0 .431.278.857.817 1.25.538.391 1.324.74 2.303 1.022.98.281 2.13.49 3.371.61s2.548.15 3.827.086" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 8c4.97 0 9-1.343 9-3s-4.03-3-9-3-9 1.343-9 3 4.03 3 9 3" /></svg>);
DatabaseArrowDown.displayName = "DatabaseArrowDown";
export default DatabaseArrowDown;