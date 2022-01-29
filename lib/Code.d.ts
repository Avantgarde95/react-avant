import { ReactNode } from "../../node_modules/@types/react";
import "../../node_modules/prismjs";
import "../../node_modules/prismjs";
import "../../node_modules/prismjs";
import 'prismjs/themes/prism-okaidia.css';
/**
 * Code props.
 */
interface Props {
    /**
     * Programming language.
     * (Default: Plain text)
     */
    language?: string;
    /**
     * Class for styling the container.
     */
    className?: string;
    /**
     * Code which will be highlighted.
     */
    children: ReactNode;
}
/**
 * Code highlighter built on prism.js.
 */
export declare const Code: ({ language, className, children }: Props) => JSX.Element;
export {};
