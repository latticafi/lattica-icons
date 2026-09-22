import { forwardRef, type SVGProps, type Ref } from "react";
const Cookie = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11 17h.01m.99-5h.01M16 16h.01M16 3h.01M21 4h.01M21 8h.01M7 14h.01M9 8h.01m2.486-6c.324-.016.558.292.529.615a4 4 0 0 0 4.235 4.368.713.713 0 0 1 .758.757 4 4 0 0 0 4.366 4.237c.323-.03.63.204.614.527a10 10 0 0 1-9.991 9.497 10.007 10.007 0 0 1-.511-20" /></svg>);
Cookie.displayName = "Cookie";
export default Cookie;