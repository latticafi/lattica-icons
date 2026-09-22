import { forwardRef, type SVGProps, type Ref } from "react";
const ListEnd = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 5H3m13 7H3m6 7H3m13-3-3 3 3 3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 5v12a2 2 0 0 1-2 2h-6" /></svg>);
ListEnd.displayName = "ListEnd";
export default ListEnd;