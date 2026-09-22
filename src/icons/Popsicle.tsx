import { forwardRef, type SVGProps, type Ref } from "react";
const Popsicle = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m22 22-5.5-5.5m2.1-2.1c.8-.8.8-2 0-2.8l-8.1-8.1a5.02 5.02 0 0 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1z" /></svg>);
Popsicle.displayName = "Popsicle";
export default Popsicle;