import { forwardRef, type SVGProps, type Ref } from "react";
const CloudBackup = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 15.25A4.5 4.5 0 0 0 17.5 8h-1.79A7 7 0 1 0 3 13.607" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 11v4h4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 19a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5 4.82 4.82 0 0 0-3.41 1.41L7 15" /></svg>);
CloudBackup.displayName = "CloudBackup";
export default CloudBackup;