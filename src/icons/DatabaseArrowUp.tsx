import { forwardRef, type SVGProps, type Ref } from "react";
const DatabaseArrowUp = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 22v-6m-3 3 3-3 3 3m-1-6.464V5M3 12c0 .464.323.922.943 1.337s1.52.777 2.63 1.056c1.111.28 2.4.47 3.769.556a26.6 26.6 0 0 0 4.115-.063" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 5v14c0 .431.278.857.817 1.25.538.391 1.324.74 2.303 1.022.98.281 2.13.49 3.371.61s2.548.15 3.827.086" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 8c4.97 0 9-1.343 9-3s-4.03-3-9-3-9 1.343-9 3 4.03 3 9 3" /></svg>);
DatabaseArrowUp.displayName = "DatabaseArrowUp";
export default DatabaseArrowUp;