import type { IconDefinition } from "../../node_modules/@fortawesome/fontawesome-common-types";
import '@fortawesome/fontawesome-svg-core/styles.css';
/**
 * Icon props.
 */
interface Props {
    /**
     * Import any Font Awesome icon and put it at here.
     */
    definition: IconDefinition;
    /**
     * Class for styling the icon.
     */
    className?: string;
    /**
     * Icon width. (Usually you don't have to set this.)
     */
    size?: number;
}
/**
 * Component for using Font Awesome easily.
 */
export declare const Icon: ({ definition, className, size }: Props) => JSX.Element;
export {};
