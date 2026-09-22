import { forwardRef, type SVGProps, type Ref } from "react";
const KeyboardOff = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M22 16.41V6a2 2 0 0 0-2-2H9.69M7 16h9m-2-8h.01M18 8h.01M2 2l20 20m-2-2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m2 4h.01M8 12h.01" /></svg>);
KeyboardOff.displayName = "KeyboardOff";
export default KeyboardOff;