import { forwardRef, type SVGProps, type Ref } from "react";
const DatabaseCheck = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m16 19 2 2 4-4m-1-3.873V5M3 12c0 .796.948 1.559 2.636 2.121S9.613 15 12 15s4.676-.316 6.364-.879S21 12.796 21 12" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 5v14c0 .431.278.857.817 1.25.538.391 1.324.74 2.303 1.022.98.281 2.13.49 3.371.61s2.548.15 3.827.086" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 8c4.97 0 9-1.343 9-3s-4.03-3-9-3-9 1.343-9 3 4.03 3 9 3" /></svg>);
DatabaseCheck.displayName = "DatabaseCheck";
export default DatabaseCheck;