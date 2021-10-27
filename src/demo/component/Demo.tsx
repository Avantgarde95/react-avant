import React from 'react';
import { faGuitar } from '@fortawesome/free-solid-svg-icons/faGuitar';
import { faMusic } from '@fortawesome/free-solid-svg-icons/faMusic';

import { Icon, Code, Sandbox, Markdown } from 'react-avant';
import 'react-avant/style.css';

import styles from 'demo/style/Demo.scss';
import { useStore } from 'demo/store/Store';

const IconDemo = () => (
    <>
        <h3 className={styles.section}>Icon</h3>
        <div className={styles.description}>Component for using Font Awesome easily</div>
        <Code language={'tsx'}>
            {`import React from 'react';
import { faGuitar } from '@fortawesome/free-solid-svg-icons/faGuitar';
import { faMusic } from '@fortawesome/free-solid-svg-icons/faMusic';

import { Icon } from 'react-avant';
import 'react-avant/dist/style.css';

const App = () => (
    <div style={{ fontSize: '2rem' }}>
        <Icon definition={faGuitar} />
        <Icon definition={faMusic} />
    </div>
);`}
        </Code>
        <div style={{ fontSize: '2rem' }}>
            <Icon definition={faGuitar} />
            <Icon definition={faMusic} />
        </div>
    </>
);

const CodeDemo = () => (
    <>
        <h3 className={styles.section}>Code</h3>
        <div className={styles.description}>Code highlighter built on prism.js</div>
        <Code language={'tsx'}>
            {`import React from 'react';

import { Code } from 'react-avant';
import 'react-avant/dist/style.css';

const App = () => (
    <div>
        <Code language={'typescript'}>const value: number = 5;</Code>
    </div>
);`}
        </Code>
        <div>
            <Code language={'typescript'}>const value: number = 5;</Code>
        </div>
    </>
);

const SandboxDemo = () => (
    <>
        <h3 className={styles.section}>Sandbox</h3>
        <div className={styles.description}>Component for embedding CodeSandbox easily</div>
        <Code language={'tsx'}>
            {`import React from 'react';

import { Sandbox } from 'react-avant';
import 'react-avant/dist/style.css';

const App = () => (
    <div>
        <style type={'text/css'}>
            {'.sandbox { width: 100%; height: 500px; }'}
        </style>
        <Sandbox className={'sandbox'} name={'lets-react-simple-typescript-example-7xid9'} />
        <Sandbox
            className={'sandbox'}
            name={'lets-react-simple-typescript-example-7xid9'}
            module={'/src/App.ts'}
        />
    </div>
);`}
        </Code>
        <div>
            <style type={'text/css'}>{'.sandbox { width: 100%; height: 500px; }'}</style>
            <Sandbox className={'sandbox'} name={'lets-react-simple-typescript-example-7xid9'} />
            <Sandbox className={'sandbox'} name={'lets-react-simple-typescript-example-7xid9'} module={'/src/App.ts'} />
        </div>
    </>
);

const MarkdownDemo = () => (
    <>
        <h3 className={styles.section}>Markdown</h3>
        <div className={styles.description}>Markdown renderer built on react-markdown</div>
        <Code language={'tsx'}>
            {`import React from 'react';

import { Markdown } from 'react-avant';
import 'react-avant/dist/style.css';

const App = () => (
    <div>
        <Markdown fallback={'Loading...'}>
            {\`# My article

## Fruits

- Apple
- Banana
- Orange

## Drinks

- Water
- Juice
- Milk\`}
        </Markdown>
    </div>
);`}
        </Code>
        <div>
            <Markdown fallback={'Loading...'}>
                {`# My article

## Fruits

- Apple
- Banana
- Orange

## Drinks

- Water
- Juice
- Milk`}
            </Markdown>
        </div>
    </>
);

export const Demo = () => {
    const { currentSection } = useStore();

    const CurrentDemo = {
        Icon: IconDemo,
        Code: CodeDemo,
        Sandbox: SandboxDemo,
        Markdown: MarkdownDemo,
    }[currentSection];

    // Use key to force React to re-render <div/> when the section is changed.
    return (
        <div className={styles.demo} key={currentSection}>
            <CurrentDemo />
        </div>
    );
};
