import { forwardRef, type SVGProps, type Ref } from "react";
const Bandage = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 10.01h.01m-.01 4h.01m3.99-4h.01m-.01 4h.01M18 6v12M6 6v12M20 6H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2" /></svg>);
Bandage.displayName = "Bandage";
export default Bandage;