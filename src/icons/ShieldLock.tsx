import { forwardRef, type SVGProps, type Ref } from "react";
const ShieldLock = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 9.807V6a1 1 0 0 0-1-1c-2 0-4.49-1.19-6.24-2.72a1.17 1.17 0 0 0-1.52 0C9.5 3.8 7 5 5 5a1 1 0 0 0-1 1v7c0 3.88 2.107 6.254 5 7.796" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 17v-2a2 2 0 0 0-4 0v2m5 0h-6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1" /></svg>);
ShieldLock.displayName = "ShieldLock";
export default ShieldLock;