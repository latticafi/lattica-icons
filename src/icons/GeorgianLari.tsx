import { forwardRef, type SVGProps, type Ref } from "react";
const GeorgianLari = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11.5 21a7.5 7.5 0 1 1 7.35-9M13 12V3M4 21h16M9 12V3" /></svg>);
GeorgianLari.displayName = "GeorgianLari";
export default GeorgianLari;