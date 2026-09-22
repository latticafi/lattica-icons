import { forwardRef, type SVGProps, type Ref } from "react";
const DatabaseBackup = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 8c4.97 0 9-1.343 9-3s-4.03-3-9-3-9 1.343-9 3 4.03 3 9 3m-9 4c-.001.56.466 1.107 1.35 1.583.883.475 2.147.858 3.65 1.107M21 9.3V5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 5v14c0 .649.63 1.28 1.796 1.8 1.166.518 2.806.898 4.674 1.08M12 12v4h4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16" /></svg>);
DatabaseBackup.displayName = "DatabaseBackup";
export default DatabaseBackup;