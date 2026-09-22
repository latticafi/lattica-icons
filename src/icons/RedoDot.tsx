import { forwardRef, type SVGProps, type Ref } from "react";
const RedoDot = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2m9-11v6h-6" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" /></svg>);
RedoDot.displayName = "RedoDot";
export default RedoDot;