import { forwardRef, type SVGProps, type Ref } from "react";
const UndoDot = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 17a9 9 0 0 0-15-6.7L3 13" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 7v6h6m3 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" /></svg>);
UndoDot.displayName = "UndoDot";
export default UndoDot;