import { forwardRef, type SVGProps, type Ref } from "react";
const SearchCode = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m13 13.5 2-2.5-2-2.5M21 21l-4.3-4.3M9 8.5 7 11l2 2.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16" /></svg>);
SearchCode.displayName = "SearchCode";
export default SearchCode;