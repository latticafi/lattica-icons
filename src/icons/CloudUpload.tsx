import { forwardRef, type SVGProps, type Ref } from "react";
const CloudUpload = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 13v8m-8-6.101A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m8 17 4-4 4 4" /></svg>);
CloudUpload.displayName = "CloudUpload";
export default CloudUpload;