import { forwardRef, type SVGProps, type Ref } from "react";
const EyeDashed = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.054 18.946q-1.055.102-2.11 0m2.11-13.892a11 11 0 0 0-2.11 0m6.128 1.22c.62.334 1.208.727 1.753 1.173m0 9.105q-.82.672-1.753 1.174M2.514 13.303a11 11 0 0 1-.452-.954 1 1 0 0 1 0-.697q.203-.488.45-.955m18.973 0q.249.467.453.955a1 1 0 0 1 0 .697q-.204.488-.453.954M5.173 7.448a11 11 0 0 1 1.753-1.174m0 11.452a11 11 0 0 1-1.753-1.174M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></svg>);
EyeDashed.displayName = "EyeDashed";
export default EyeDashed;