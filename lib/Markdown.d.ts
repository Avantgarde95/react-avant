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
    /**
     * Class for styling the container.
     */
    className?: string;
    /**
     * This will be rendered instead while react-markdown is being loaded.
     */
    fallback: SuspenseProps['fallback'];
    /**
     * Content written in Markdown format.
     */
    children: string;
    /**
     * Use this to map some HTML tags to the custom React components.
     */
    mapper?: Components;
}
/**
 * Markdown renderer built on react-markdown.
 */
export declare const Markdown: ({ className, fallback, children, mapper }: Props) => JSX.Element;
export {};
