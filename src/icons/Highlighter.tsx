import { forwardRef, type SVGProps, type Ref } from "react";
const Highlighter = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m9 11-6 6v3h9l3-3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4" /></svg>);
Highlighter.displayName = "Highlighter";
export default Highlighter;