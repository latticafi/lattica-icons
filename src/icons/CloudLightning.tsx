import { forwardRef, type SVGProps, type Ref } from "react";
const CloudLightning = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m13 12-3 5h4l-3 5" /></svg>);
CloudLightning.displayName = "CloudLightning";
export default CloudLightning;