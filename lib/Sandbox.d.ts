/**
 * Sandbox props.
 */
interface Props {
    /**
     * Project name.
     */
    name: string;
    /**
     * Set this value to the path of the source file if you let CodeSandbox to open that file.
     */
    module?: string;
    /**
     * Class for styling the container.
     */
    className?: string;
}
/**
 * Component for embedding CodeSandbox easily.
 */
export declare const Sandbox: ({ name, module, className }: Props) => JSX.Element;
export {};
