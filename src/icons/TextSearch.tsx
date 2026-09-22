import { forwardRef, type SVGProps, type Ref } from "react";
const TextSearch = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 5H3m7 7H3m7 7H3m14-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6m4 1-1.9-1.9" /></svg>);
TextSearch.displayName = "TextSearch";
export default TextSearch;