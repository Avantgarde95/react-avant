import { ReactNode } from "../../node_modules/@types/react";
import "../../node_modules/prismjs";
import "../../node_modules/prismjs";
import "../../node_modules/prismjs";
import 'prismjs/themes/prism-okaidia.css';
/**
 * Code props.
 */
interface Props {
    language: string;
    className?: string;
    children: ReactNode;
}
/**
 * Code highlighter built on prism.js.
 */
export declare const Code: ({ language, className, children }: Props) => JSX.Element;
export {};
