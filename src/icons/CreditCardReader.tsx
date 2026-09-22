import { forwardRef, type SVGProps, type Ref } from "react";
const CreditCardReader = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 16v1m1.963-9.266A1 1 0 0 0 15.999 7H8.003a1 1 0 0 0-.964.734L4.073 18.467A2 2 0 0 0 6 21h12a2 2 0 0 0 1.927-2.532z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.678 8.5A2 2 0 0 1 2 7V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-.676 1.499M9 21l2-14" /></svg>);
CreditCardReader.displayName = "CreditCardReader";
export default CreditCardReader;