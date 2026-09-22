import { forwardRef, type SVGProps, type Ref } from "react";
const Pilcrow = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13 4v16m4-16v16m2-16H9.5a4.5 4.5 0 0 0 0 9H13" /></svg>);
Pilcrow.displayName = "Pilcrow";
export default Pilcrow;