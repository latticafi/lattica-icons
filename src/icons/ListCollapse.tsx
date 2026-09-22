import { forwardRef, type SVGProps, type Ref } from "react";
const ListCollapse = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 5h11m-11 7h11m-11 7h11M3 10l3-3-3-3m0 16 3-3-3-3" /></svg>);
ListCollapse.displayName = "ListCollapse";
export default ListCollapse;