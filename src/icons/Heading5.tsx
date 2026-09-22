import { forwardRef, type SVGProps, type Ref } from "react";
const Heading5 = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 12h8m-8 6V6m8 12V6m9 4h-4v3h1.3c1.5 0 2.7 1.1 2.7 2.5S19.8 18 18.3 18c-.5 0-.9-.1-1.3-.3" /></svg>);
Heading5.displayName = "Heading5";
export default Heading5;