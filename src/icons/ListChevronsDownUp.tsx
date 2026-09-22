import { forwardRef, type SVGProps, type Ref } from "react";
const ListChevronsDownUp = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 5h8m-8 7h8m-8 7h8m4-14 3 3 3-3m-6 14 3-3 3 3" /></svg>);
ListChevronsDownUp.displayName = "ListChevronsDownUp";
export default ListChevronsDownUp;