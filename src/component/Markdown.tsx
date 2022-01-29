import React, { lazy, Suspense, SuspenseProps, useEffect, useState } from 'react';
import type { PluggableList } from 'react-markdown/lib/react-markdown';
import type { Components } from 'react-markdown/lib/ast-to-react';

import { Code } from 'component/Code';

// Since the size of react-markdown is large, we use code splitting and lazy loading.
// (See https://reactjs.org/docs/code-splitting.html.)
const ReactMarkdown = lazy(() => import('react-markdown'));

const remarkPluginsPromise = Promise.all([import('remark-gfm')]);

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
export const Markdown = ({ className, fallback, children, mapper = defaultMarkdownMapper }: Props) => {
    const [remarkPlugins, setRemarkPlugins] = useState<PluggableList>([]);

    useEffect(() => {
        (async () => {
            setRemarkPlugins((await remarkPluginsPromise).map(result => result.default));
        })();
    }, []);

    return (
        <Suspense fallback={fallback}>
            <ReactMarkdown className={className} components={mapper} remarkPlugins={remarkPlugins}>
                {children}
            </ReactMarkdown>
        </Suspense>
    );
};
