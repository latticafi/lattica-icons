import { forwardRef, type SVGProps, type Ref } from "react";
const TableRowsSplit = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 10h2m-1 12v-8m0-12v4M2 10h2m16 0h2M3 19h18M3 22v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M3 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V2M8 10h2M9 22v-8M9 2v4" /></svg>);
TableRowsSplit.displayName = "TableRowsSplit";
export default TableRowsSplit;