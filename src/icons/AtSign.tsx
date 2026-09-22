import { forwardRef, type SVGProps, type Ref } from "react";
const AtSign = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" /></svg>);
AtSign.displayName = "AtSign";
export default AtSign;