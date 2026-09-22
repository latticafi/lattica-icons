import { forwardRef, type SVGProps, type Ref } from "react";
const Library = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m16 6 4 14M12 6v14M8 8v12M4 4v16" /></svg>);
Library.displayName = "Library";
export default Library;