import { forwardRef, type SVGProps, type Ref } from "react";
const Upload = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 3v12M7 8l5-5 5 5m4 7v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /></svg>);
Upload.displayName = "Upload";
export default Upload;