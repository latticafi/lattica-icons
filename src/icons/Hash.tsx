import { forwardRef, type SVGProps, type Ref } from "react";
const Hash = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 9h16M4 15h16M10 3 8 21m8-18-2 18" /></svg>);
Hash.displayName = "Hash";
export default Hash;