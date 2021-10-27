import React, { lazy, Suspense, SuspenseProps } from 'react';
import type { Components } from 'react-markdown/lib/ast-to-react';

import { Code } from 'library/Code';

// Since the size of react-markdown is large, we use code splitting and lazy loading.
// (See https://reactjs.org/docs/code-splitting.html.)
const ReactMarkdown = lazy(() => import('react-markdown'));

/**
 * 'Mapper' which overrides html-to-jsx conversion.
 */
export type MarkdownMapper = Components;

/**
 * Default mapper for overriding html-to-jsx conversion.
 * You can extend this to change the behavior of the renderer.
 */
export const defaultMarkdownMapper: MarkdownMapper = {
    code: ({ inline, className, children }) => {
        const hasLanguage = typeof className !== 'undefined' && className.startsWith('language-');
        const language = hasLanguage ? className.substring(9) : undefined;

        if (inline) {
            return <code className={'InlineCodeView'}>{children}</code>;
        }
        return <Code language={language}>{children}</Code>;
    },
};

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
export const Markdown = ({ className, fallback, children, mapper = defaultMarkdownMapper }: Props) => (
    <Suspense fallback={fallback}>
        <ReactMarkdown className={className} components={mapper}>
            {children}
        </ReactMarkdown>
    </Suspense>
);
