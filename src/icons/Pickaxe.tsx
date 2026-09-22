import { forwardRef, type SVGProps, type Ref } from "react";
const Pickaxe = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m14 13-8.381 8.38a2.122 2.122 0 1 1-3.001-3L11 9.999m4.973-5.972A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.6a19.9 19.9 0 0 1 5.822 3.025m4 4a19.9 19.9 0 0 1 3.024 5.825c.444 1.369 2.26 1.675 2.603.277A13 13 0 0 0 20 8.07" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z" /></svg>);
Pickaxe.displayName = "Pickaxe";
export default Pickaxe;