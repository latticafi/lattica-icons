import { forwardRef, type SVGProps, type Ref } from "react";
const CreditCardX = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.5 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3.5M2 10h20M6 14h2m8.5.5 5 5m0-5-5 5" /></svg>);
CreditCardX.displayName = "CreditCardX";
export default CreditCardX;