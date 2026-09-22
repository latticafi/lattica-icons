import { forwardRef, type SVGProps, type Ref } from "react";
const CloudCheck = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m17 15-5.5 5.5L9 18" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5.516 16.07A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 3.501 7.327" /></svg>);
CloudCheck.displayName = "CloudCheck";
export default CloudCheck;