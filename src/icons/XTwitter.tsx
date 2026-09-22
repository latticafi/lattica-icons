import { forwardRef, type SVGProps, type Ref } from "react";
const XTwitter = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path fill="currentColor" d="M18.9 1.125h3.681l-8.04 9.213L24 22.875h-7.405l-5.801-7.605-6.637 7.605H.474l8.6-9.855L0 1.125h7.595l5.242 6.95zm-1.29 19.542h2.04L6.485 3.217H4.298z" /></svg>);
XTwitter.displayName = "XTwitter";
export default XTwitter;