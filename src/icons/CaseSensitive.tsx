import { forwardRef, type SVGProps, type Ref } from "react";
const CaseSensitive = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16m11-7v7M3.304 13h6.392m8.804 3a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" /></svg>);
CaseSensitive.displayName = "CaseSensitive";
export default CaseSensitive;