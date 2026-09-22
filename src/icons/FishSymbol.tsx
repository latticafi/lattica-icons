import { forwardRef, type SVGProps, type Ref } from "react";
const FishSymbol = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 16s9-15 20-4C11 23 2 8 2 8" /></svg>);
FishSymbol.displayName = "FishSymbol";
export default FishSymbol;