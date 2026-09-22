import { forwardRef, type SVGProps, type Ref } from "react";
const CctvOff = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m12.309 6.652 4.797 2.401a1 1 0 0 1 .447 1.341l-.501 1.001.605.605h2.725a1 1 0 0 1 .894 1.447l-.724 1.448m-5.386.271-.719 1.439a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.9 2.9 0 0 1 .873-1.037" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 19h3.76a2 2 0 0 0 1.8-1.1l1.441-2.902M2 2l20 20M2 21v-4m5-8h.01" /></svg>);
CctvOff.displayName = "CctvOff";
export default CctvOff;