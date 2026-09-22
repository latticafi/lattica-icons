import { forwardRef, type SVGProps, type Ref } from "react";
const ListFilterPlus = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 5H2m4 7h12m-9 7h6m1-14h6m-3 3V2" /></svg>);
ListFilterPlus.displayName = "ListFilterPlus";
export default ListFilterPlus;