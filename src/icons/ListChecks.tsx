import { forwardRef, type SVGProps, type Ref } from "react";
const ListChecks = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13 5h8m-8 7h8m-8 7h8M3 17l2 2 4-4M3 7l2 2 4-4" /></svg>);
ListChecks.displayName = "ListChecks";
export default ListChecks;