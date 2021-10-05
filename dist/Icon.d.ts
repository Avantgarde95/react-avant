import type { IconDefinition } from "../node_modules/@fortawesome/fontawesome-common-types";
import '@fortawesome/fontawesome-svg-core/styles.css';
/**
 * Icon props.
 */
interface Props {
    definition: IconDefinition;
    className?: string;
    size?: number;
}
/**
 * Component for using Font Awesome easily.
 */
export declare const Icon: ({ definition, className, size }: Props) => JSX.Element;
export {};
