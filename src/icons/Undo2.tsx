import { forwardRef, type SVGProps, type Ref } from "react";
const Undo2 = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 14 4 9l5-5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 9h10.5a5.5 5.5 0 1 1 0 11H11" /></svg>);
Undo2.displayName = "Undo2";
export default Undo2;