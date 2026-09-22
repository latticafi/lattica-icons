import { forwardRef, type SVGProps, type Ref } from "react";
const Loader = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 2v4m4.2 1.8 2.9-2.9M18 12h4m-5.8 4.2 2.9 2.9M12 18v4m-7.1-2.9 2.9-2.9M2 12h4M4.9 4.9l2.9 2.9" /></svg>);
Loader.displayName = "Loader";
export default Loader;