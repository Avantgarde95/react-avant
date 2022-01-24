import React, { ReactNode, useEffect, useRef, useState } from 'react';

import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-typescript.min';
import 'prismjs/components/prism-tsx.min';
import 'prismjs/themes/prism-okaidia.css';

/**
 * Code props.
 */
interface Props {
    language?: string;
    className?: string;
    children: ReactNode;
}

/**
 * Code highlighter built on prism.js.
 */
export const Code = ({ language = '', className = '', children }: Props) => {
    const codeRef = useRef<HTMLElement | null>(null);
    const [resultHTML, setResultHTML] = useState<string | null>(null);

    // If the language is unprovided or wrong: Set it to 'text'.
    const finalLanguage = typeof languages[language] !== 'undefined' ? language : 'text';
    const prismClassName = `language-${finalLanguage}`;

    useEffect(() => {
        if (codeRef.current !== null) {
            const code = codeRef.current.textContent ?? '';
            setResultHTML(highlight(code, languages[finalLanguage], finalLanguage));
        }
    }, [finalLanguage, children]);

    return (
        <pre className={`${prismClassName} ${className}`}>
            {/* Hidden element for getting textContent of children. */}
            <code style={{ display: 'none' }} ref={codeRef}>
                {children}
            </code>
            {resultHTML === null ? (
                children
            ) : (
                // eslint-disable-next-line react/no-danger
                <code className={prismClassName} dangerouslySetInnerHTML={{ __html: resultHTML }} />
            )}
        </pre>
    );
};
