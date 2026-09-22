import { forwardRef, type SVGProps, type Ref } from "react";
const Plane = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m16 11 1.8 8.2c.1.5-.1.9-.5 1.2l-.5.2c-.5.2-1 .1-1.3-.3L12 15l-3 2v3l-1 1-2-3-3-2 1-1h3l2-3-5.3-3.5c-.4-.3-.5-.8-.3-1.3l.3-.5c.2-.4.6-.6 1.1-.5L13 8l3.5-3.5C18 3 20 2.5 21 3c.5 1 0 3-1.5 4.5z" /></svg>);
Plane.displayName = "Plane";
export default Plane;