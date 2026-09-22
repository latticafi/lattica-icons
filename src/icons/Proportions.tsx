import { forwardRef, type SVGProps, type Ref } from "react";
const Proportions = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 9v11M2 9h13a2 2 0 0 1 2 2v9" /></svg>);
Proportions.displayName = "Proportions";
export default Proportions;