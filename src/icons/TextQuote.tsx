import { forwardRef, type SVGProps, type Ref } from "react";
const TextQuote = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 5H3m18 7H8m13 7H8m-5-7v7" /></svg>);
TextQuote.displayName = "TextQuote";
export default TextQuote;