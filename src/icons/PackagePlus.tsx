import { forwardRef, type SVGProps, type Ref } from "react";
const PackagePlus = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 22V12m4 5h6m-3-3v6m2-9.465V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 0l1.675-.954" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3.29 7 12 12l8.71-5M7.5 4.27l8.997 5.148" /></svg>);
PackagePlus.displayName = "PackagePlus";
export default PackagePlus;