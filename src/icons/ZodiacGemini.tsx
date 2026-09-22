import { forwardRef, type SVGProps, type Ref } from "react";
const ZodiacGemini = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 4.525v14.948M20 3A17 17 0 0 1 4 3m0 18a17 17 0 0 1 16 0M8 4.525v14.948" /></svg>);
ZodiacGemini.displayName = "ZodiacGemini";
export default ZodiacGemini;