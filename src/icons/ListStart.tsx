import { forwardRef, type SVGProps, type Ref } from "react";
const ListStart = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 5h6m-6 7h13M3 19h13m0-11-3-3 3-3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 19V7a2 2 0 0 0-2-2h-6" /></svg>);
ListStart.displayName = "ListStart";
export default ListStart;