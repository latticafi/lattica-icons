import { forwardRef, type SVGProps, type Ref } from "react";
const ShoppingCart = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25M18 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4M8 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
ShoppingCart.displayName = "ShoppingCart";
export default ShoppingCart;