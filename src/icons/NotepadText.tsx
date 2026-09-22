import { forwardRef, type SVGProps, type Ref } from "react";
const NotepadText = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 2v4m4-4v4m4-4v4m2-2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M8 10h6m-6 4h8m-8 4h5" /></svg>);
NotepadText.displayName = "NotepadText";
export default NotepadText;