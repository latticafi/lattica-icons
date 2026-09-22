import { forwardRef, type SVGProps, type Ref } from "react";
const TextWrap = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m16 16-3 3 3 3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 12h14.5a3.5 3.5 0 1 1 0 7H13M3 19h6M3 5h18" /></svg>);
TextWrap.displayName = "TextWrap";
export default TextWrap;