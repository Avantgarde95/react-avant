import { SuspenseProps } from "../../node_modules/@types/react";
import type { Components } from "../../node_modules/react-markdown";
/**
 * 'Mapper' which overrides html-to-jsx conversion.
 */
export declare type MarkdownMapper = Components;
/**
 * Default mapper for overriding html-to-jsx conversion.
 * You can extend this to change the behavior of the renderer.
 */
export declare const defaultMarkdownMapper: MarkdownMapper;
/**
 * Markdown props.
 */
interface Props {
    className?: string;
    fallback: SuspenseProps['fallback'];
    children: string;
    mapper?: Components;
}
/**
 * Markdown renderer built on react-markdown.
 */
export declare const Markdown: ({ className, fallback, children, mapper }: Props) => JSX.Element;
export {};
