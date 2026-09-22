import { forwardRef, type SVGProps, type Ref } from "react";
const ListX = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 5H3m8 7H3m13 7H3m12.5-9.5 5 5m0-5-5 5" /></svg>);
ListX.displayName = "ListX";
export default ListX;