import { forwardRef, type SVGProps, type Ref } from "react";
const Candy = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 7v10.9m4-11.8V17m2-10V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14.914 6.38a5 5 0 0 1 1.622 8.155l-2 2a5 5 0 0 1-7.072 0 5 5 0 0 1 0-7.07l2-2a5 5 0 0 1 5.45-1.084" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4" /></svg>);
Candy.displayName = "Candy";
export default Candy;