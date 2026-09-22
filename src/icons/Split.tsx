import { forwardRef, type SVGProps, type Ref } from "react";
const Split = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 3h5v5M8 3H3v5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3m12 6 6-6" /></svg>);
Split.displayName = "Split";
export default Split;