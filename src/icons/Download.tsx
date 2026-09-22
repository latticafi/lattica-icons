import { forwardRef, type SVGProps, type Ref } from "react";
const Download = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7 10 5 5 5-5" /></svg>);
Download.displayName = "Download";
export default Download;