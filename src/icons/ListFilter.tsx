import { forwardRef, type SVGProps, type Ref } from "react";
const ListFilter = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 5h20M6 12h12m-9 7h6" /></svg>);
ListFilter.displayName = "ListFilter";
export default ListFilter;