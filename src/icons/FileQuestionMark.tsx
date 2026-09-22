import { forwardRef, type SVGProps, type Ref } from "react";
const FileQuestionMark = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 17h.01M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" /></svg>);
FileQuestionMark.displayName = "FileQuestionMark";
export default FileQuestionMark;