import React from 'react';

/**
 * Sandbox props.
 */
interface Props {
    name: string;
    module?: string;
    className?: string;
}

/**
 * Component for embedding CodeSandbox easily.
 * Set 'module' to the path of the source file if you let CodeSandbox to open that file.
 */
export const Sandbox = ({ name, module, className }: Props) => (
    <iframe
        className={className}
        title={`CodeSandbox ${name}`}
        src={`https://codesandbox.io/embed/${name}${typeof module !== 'undefined' ? `?module=${module}` : ''}`}
        allow={
            'accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
        }
        sandbox={'allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'}
    />
);
