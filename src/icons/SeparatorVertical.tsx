import { forwardRef, type SVGProps, type Ref } from "react";
const SeparatorVertical = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m4-5 4-4-4-4M8 8l-4 4 4 4" /></svg>);
SeparatorVertical.displayName = "SeparatorVertical";
export default SeparatorVertical;