import { forwardRef, type SVGProps, type Ref } from "react";
const FileKey = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 2v5a1 1 0 0 0 1 1h5M4 12v6m0-4h2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v4m0 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
FileKey.displayName = "FileKey";
export default FileKey;