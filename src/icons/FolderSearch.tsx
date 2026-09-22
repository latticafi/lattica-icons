import { forwardRef, type SVGProps, type Ref } from "react";
const FolderSearch = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1M21 21l-1.9-1.9" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></svg>);
FolderSearch.displayName = "FolderSearch";
export default FolderSearch;