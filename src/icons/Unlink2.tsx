import { forwardRef, type SVGProps, type Ref } from "react";
const Unlink2 = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 7h2a5 5 0 1 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2" /></svg>);
Unlink2.displayName = "Unlink2";
export default Unlink2;