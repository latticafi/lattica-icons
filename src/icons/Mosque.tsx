import { forwardRef, type SVGProps, type Ref } from "react";
const Mosque = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.268 2a2 2 0 0 0 3.465 2M14 5v3m0 0c1.422 0 2.825.47 4.1 1.37 1.234.877 2.238 2.133 2.9 3.63H7c.663-1.496 1.668-2.752 2.9-3.63C11.174 8.47 12.578 8 14 8m2 14v-3a2 2 0 0 0-4 0v3M3 9h4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 22V6a5 5 0 0 0-2-4 5 5 0 0 0-2 4v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /></svg>);
Mosque.displayName = "Mosque";
export default Mosque;