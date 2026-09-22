import { forwardRef, type SVGProps, type Ref } from "react";
const SpellCheck = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m20 15-5.5 5.5L12 18m-8-2 6-12 5.115 10.23M6 12h8" /></svg>);
SpellCheck.displayName = "SpellCheck";
export default SpellCheck;