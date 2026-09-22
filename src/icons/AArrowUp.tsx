import { forwardRef, type SVGProps, type Ref } from "react";
const AArrowUp = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m22 11-4-4-4 4m4-4v9M2 16l4.039-9.69a.5.5 0 0 1 .923 0L11 16m-7.696-3h6.392" /></svg>);
AArrowUp.displayName = "AArrowUp";
export default AArrowUp;