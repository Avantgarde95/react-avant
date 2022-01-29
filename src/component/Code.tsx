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

const defaultLanguage = 'text';

/**
 * Create the class for highlighting.
 */
function getPrismClassName(language: string) {
    return `language-${language}`;
}

/**
 * Code highlighter built on prism.js.
 */
export const Code = ({ language = defaultLanguage, className = '', children }: Props) => {
    const codeRef = useRef<HTMLElement | null>(null);
    const [resultHTML, setResultHTML] = useState<string | null>(null);

    // If the language is not supported, just choose the default language (plain text).
    const finalLanguage = typeof languages[language] !== 'undefined' ? language : defaultLanguage;

    useEffect(() => {
        if (codeRef.current !== null) {
            const code = codeRef.current.textContent ?? '';
            setResultHTML(highlight(code, languages[finalLanguage], finalLanguage));
        }
    }, [finalLanguage, children]);

    return (
        <pre className={`${getPrismClassName(finalLanguage)} ${className}`}>
            {/* Hidden element for getting textContent of children. */}
            <code style={{ display: 'none' }} ref={codeRef}>
                {children}
            </code>
            {resultHTML === null ? (
                // While calculating the highlights,
                // render the plain text instead of the empty space.
                // (For the better user experience)
                <code className={getPrismClassName(defaultLanguage)}>{children}</code>
            ) : (
                // eslint-disable-next-line react/no-danger
                <code className={getPrismClassName(finalLanguage)} dangerouslySetInnerHTML={{ __html: resultHTML }} />
            )}
        </pre>
    );
};
