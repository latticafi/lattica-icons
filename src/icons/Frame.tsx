import { forwardRef, type SVGProps, type Ref } from "react";
const Frame = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M22 6H2m20 12H2M6 2v20M18 2v20" /></svg>);
Frame.displayName = "Frame";
export default Frame;