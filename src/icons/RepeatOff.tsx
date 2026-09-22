import { forwardRef, type SVGProps, type Ref } from "react";
const RepeatOff = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11.656 6H21m-4 4 4-4-4-4m.898 15.898A4 4 0 0 1 17 18H3m4 4-4-4 4-4M2 2l20 20m-1-9v1c0 .393-.057.783-.171 1.159M3 11v-1a4 4 0 0 1 3.102-3.898" /></svg>);
RepeatOff.displayName = "RepeatOff";
export default RepeatOff;