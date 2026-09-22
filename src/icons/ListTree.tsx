import { forwardRef, type SVGProps, type Ref } from "react";
const ListTree = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 5h13m-8 7h8m-8 7h8M3 10a2 2 0 0 0 2 2h3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 5v12a2 2 0 0 0 2 2h3" /></svg>);
ListTree.displayName = "ListTree";
export default ListTree;