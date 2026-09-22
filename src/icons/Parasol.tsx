import { forwardRef, type SVGProps, type Ref } from "react";
const Parasol = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.5 11.134 18.196 21m2.229-15.7a10 10 0 0 0-16.941 9.78c.183.562.843.773 1.355.477L20.16 6.711c.512-.296.66-.973.264-1.413M21 21H3" /></svg>);
Parasol.displayName = "Parasol";
export default Parasol;