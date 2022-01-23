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
export declare const Sandbox: ({ name, module, className }: Props) => JSX.Element;
export {};
