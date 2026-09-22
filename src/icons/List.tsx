import { forwardRef, type SVGProps, type Ref } from "react";
const List = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 5h.01M3 12h.01M3 19h.01M8 5h13M8 12h13M8 19h13" /></svg>);
List.displayName = "List";
export default List;