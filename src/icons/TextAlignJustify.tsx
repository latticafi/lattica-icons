import { forwardRef, type SVGProps, type Ref } from "react";
const TextAlignJustify = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 5h18M3 12h18M3 19h18" /></svg>);
TextAlignJustify.displayName = "TextAlignJustify";
export default TextAlignJustify;