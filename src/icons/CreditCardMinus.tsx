import { forwardRef, type SVGProps, type Ref } from "react";
const CreditCardMinus = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M22 13V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8.536M22 10H2m4 4h2m8 3h6" /></svg>);
CreditCardMinus.displayName = "CreditCardMinus";
export default CreditCardMinus;