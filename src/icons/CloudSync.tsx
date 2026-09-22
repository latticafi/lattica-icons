import { forwardRef, type SVGProps, type Ref } from "react";
const CloudSync = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m17 18-1.535 1.605a5 5 0 0 1-8-1.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 22v-4h-4m7.996-2.749a4.5 4.5 0 0 0-3.501-7.25h-1.79a7 7 0 1 0-12.709 5.606" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 10v4h4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7 14 1.535-1.605a5 5 0 0 1 8 1.5" /></svg>);
CloudSync.displayName = "CloudSync";
export default CloudSync;