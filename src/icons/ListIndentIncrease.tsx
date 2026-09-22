import { forwardRef, type SVGProps, type Ref } from "react";
const ListIndentIncrease = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 5H11m10 7H11m10 7H11M3 8l4 4-4 4" /></svg>);
ListIndentIncrease.displayName = "ListIndentIncrease";
export default ListIndentIncrease;