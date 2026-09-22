import { forwardRef, type SVGProps, type Ref } from "react";
const ZodiacVirgo = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11 5.5a2.5 2.5 0 0 1 5 0V16a5 5 0 0 0 5 5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 11.5a2.5 2.5 0 0 1 5 0V16a5 5 0 0 1-5 5M6 19V6a3 3 0 0 0-3-3m3 2.5a2.5 2.5 0 1 1 5 0V19" /></svg>);
ZodiacVirgo.displayName = "ZodiacVirgo";
export default ZodiacVirgo;