import { forwardRef, type SVGProps, type Ref } from "react";
const ListRestart = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 5H3m4 7H3m4 7H3m9-1a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11 10v4h4" /></svg>);
ListRestart.displayName = "ListRestart";
export default ListRestart;