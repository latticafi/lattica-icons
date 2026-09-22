import { forwardRef, type SVGProps, type Ref } from "react";
const CloudDownload = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 13v8m4-4-4 4-4-4m-3.607-1.73A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" /></svg>);
CloudDownload.displayName = "CloudDownload";
export default CloudDownload;