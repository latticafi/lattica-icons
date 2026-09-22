import { forwardRef, type SVGProps, type Ref } from "react";
const ListSortDescending = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 12H3m0-7h18M9 19H3" /></svg>);
ListSortDescending.displayName = "ListSortDescending";
export default ListSortDescending;