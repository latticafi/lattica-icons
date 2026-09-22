import { forwardRef, type SVGProps, type Ref } from "react";
const Strikethrough = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 4H9a3 3 0 0 0-2.83 4M14 12a4 4 0 1 1 0 8H6m-2-8h16" /></svg>);
Strikethrough.displayName = "Strikethrough";
export default Strikethrough;