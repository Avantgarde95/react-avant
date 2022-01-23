import { DetailedHTMLProps, ImgHTMLAttributes } from "../../node_modules/@types/react";
import 'luminous-lightbox/dist/luminous-basic.min.css';
/**
 * Image props.
 */
declare type Props = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
    src: string;
    alt: string;
};
/**
 * Wrapper of img tag which shows a 'lightbox' when the image is clicked.
 */
export declare const Image: ({ src, alt, ...others }: Props) => JSX.Element;
export {};
