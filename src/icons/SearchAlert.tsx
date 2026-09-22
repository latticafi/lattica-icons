import { forwardRef, type SVGProps, type Ref } from "react";
const SearchAlert = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16m10 2-4.3-4.3M11 7v4m0 4h.01" /></svg>);
SearchAlert.displayName = "SearchAlert";
export default SearchAlert;