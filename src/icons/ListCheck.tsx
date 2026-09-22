import { forwardRef, type SVGProps, type Ref } from "react";
const ListCheck = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 5H3m13 7H3m8 7H3m12-1 2 2 4-4" /></svg>);
ListCheck.displayName = "ListCheck";
export default ListCheck;