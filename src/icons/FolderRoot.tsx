import { forwardRef, type SVGProps, type Ref } from "react";
const FolderRoot = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 0v5" /></svg>);
FolderRoot.displayName = "FolderRoot";
export default FolderRoot;