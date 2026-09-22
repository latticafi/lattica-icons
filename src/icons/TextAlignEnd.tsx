import { forwardRef, type SVGProps, type Ref } from "react";
const TextAlignEnd = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 5H3m18 7H9m12 7H7" /></svg>);
TextAlignEnd.displayName = "TextAlignEnd";
export default TextAlignEnd;