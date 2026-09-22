import { forwardRef, type SVGProps, type Ref } from "react";
const ListChevronsUpDown = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 5h8m-8 7h8m-8 7h8m4-11 3-3 3 3m-6 8 3 3 3-3" /></svg>);
ListChevronsUpDown.displayName = "ListChevronsUpDown";
export default ListChevronsUpDown;