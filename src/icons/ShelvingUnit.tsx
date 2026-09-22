import { forwardRef, type SVGProps, type Ref } from "react";
const ShelvingUnit = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 12V9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3m8 8v-3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3m8 2V2M4 12h16M4 20h16M4 2v20M4 4h16" /></svg>);
ShelvingUnit.displayName = "ShelvingUnit";
export default ShelvingUnit;