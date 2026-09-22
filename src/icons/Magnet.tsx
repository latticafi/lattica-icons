import { forwardRef, type SVGProps, type Ref } from "react";
const Magnet = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m12 15 4 4M5 8l4 4m-6.648-1.352a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.03a2.121 2.121 0 1 1 3 3l-6.029 6.03a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367a7.778 7.778 0 0 0-11.001-11z" /></svg>);
Magnet.displayName = "Magnet";
export default Magnet;