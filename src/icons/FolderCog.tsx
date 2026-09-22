import { forwardRef, type SVGProps, type Ref } from "react";
const FolderCog = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.98a2 2 0 0 1 1.69.9l.66 1.2A2 2 0 0 0 12 6h8a2 2 0 0 1 2 2v3.3m-7.695 8.23.923-.382m0-2.296-.923-.383m2.547-1.24-.383-.924m.383 6.467-.383.924m2.679-6.468.383-.923m-.001 7.391-.382-.924m1.624-3.92.924-.383m-.924 2.68.924.382" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></svg>);
FolderCog.displayName = "FolderCog";
export default FolderCog;