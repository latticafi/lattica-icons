import { forwardRef, type SVGProps, type Ref } from "react";
const RemoveFormatting = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 7V4h16v3M5 20h6m2-16L8 20m7-5 5 5m0-5-5 5" /></svg>);
RemoveFormatting.displayName = "RemoveFormatting";
export default RemoveFormatting;