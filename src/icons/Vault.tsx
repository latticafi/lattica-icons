import { forwardRef, type SVGProps, type Ref } from "react";
const Vault = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2" /><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7.9 7.9 2.7 2.7" /><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m13.4 10.6 2.7-2.7" /><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7.5 17a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7.9 16.1 2.7-2.7" /><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16.5 17a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m13.4 13.4 2.7 2.7M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
Vault.displayName = "Vault";
export default Vault;