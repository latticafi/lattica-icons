import { forwardRef, type SVGProps, type Ref } from "react";
const FileHeadphone = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 6.835V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-.343" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 2v5a1 1 0 0 0 1 1h5M2 19a2 2 0 0 1 4 0v1a2 2 0 0 1-4 0v-4a6 6 0 1 1 12 0v4a2 2 0 0 1-4 0v-1a2 2 0 0 1 4 0" /></svg>);
FileHeadphone.displayName = "FileHeadphone";
export default FileHeadphone;