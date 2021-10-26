import React, { ReactNode, useCallback } from 'react';

import { highlightElement } from 'prismjs';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-typescript.min';
import 'prismjs/components/prism-tsx.min';
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
export const Code = ({ language, className, children }: Props) => {
    const codeRef = useCallback((element: HTMLElement) => {
        highlightElement(element);
    }, []);

    return (
        <pre className={className}>
            <code className={`language-${language}`} ref={codeRef}>
                {children}
            </code>
        </pre>
    );
};