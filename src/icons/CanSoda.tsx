import { forwardRef, type SVGProps, type Ref } from "react";
const CanSoda = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m17 22 1.664-2.496a2 2 0 0 0 .336-1.11V5.606a2 2 0 0 0-.336-1.11L17 2m1 20H6M18 2H6M5 17h14M5 7h14M7 22l-1.664-2.496A2 2 0 0 1 5 18.394V5.606a2 2 0 0 1 .336-1.11L7 2" /></svg>);
CanSoda.displayName = "CanSoda";
export default CanSoda;