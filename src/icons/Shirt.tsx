import { forwardRef, type SVGProps, type Ref } from "react";
const Shirt = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m16 2 4.38 1.46a2 2 0 0 1 1.34 2.23l-.58 3.47a1 1 0 0 1-.99.84H18v10a2 2 0 0 1-2 2H8c-1.1 0-2-.9-2-2V10H3.85a1 1 0 0 1-.99-.84l-.58-3.47a2 2 0 0 1 1.34-2.23L8 2a4 4 0 0 0 8 0" /></svg>);
Shirt.displayName = "Shirt";
export default Shirt;