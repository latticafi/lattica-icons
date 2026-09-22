import { forwardRef, type SVGProps, type Ref } from "react";
const FileBox = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 2v5a1 1 0 0 0 1 1h5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14.692 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.804" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.264 13.752 7 16.5l4.737-2.748" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 22a2 2 0 0 1-1.004-.27l-3-1.74A2 2 0 0 1 2 18.26v-3.516a2 2 0 0 1 .995-1.73l3.118-1.807a2 2 0 0 1 1.892.064l3 1.742a2 2 0 0 1 .995 1.73v3.517a2 2 0 0 1-.996 1.73l-3 1.74A2 2 0 0 1 7 22m0 0v-5.5" /></svg>);
FileBox.displayName = "FileBox";
export default FileBox;