import { forwardRef, type SVGProps, type Ref } from "react";
const Dessert = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.162 3.167A10 10 0 0 0 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4-.006 10 10 0 0 0-8.161-9.826" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20.804 14.87a9 9 0 0 1-17.608 0M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
Dessert.displayName = "Dessert";
export default Dessert;