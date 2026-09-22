import { forwardRef, type SVGProps, type Ref } from "react";
const IdCardLanyard = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.5 8h-3M15 2l-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 22a4 4 0 1 0-8 0M9 2l3 6" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></svg>);
IdCardLanyard.displayName = "IdCardLanyard";
export default IdCardLanyard;