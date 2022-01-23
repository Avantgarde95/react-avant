import React, { DetailedHTMLProps, ImgHTMLAttributes, useCallback, useRef } from 'react';
import { Luminous } from 'luminous-lightbox';
import 'luminous-lightbox/dist/luminous-basic.min.css';

/**
 * Image props.
 */
type Props = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
    // Make src and alt non-optional.
    src: string;
    alt: string;
};

/**
 * Wrapper of img tag which shows a 'lightbox' when the image is clicked.
 */
export const Image = ({ src, alt, ...others }: Props) => {
    const lightboxRef = useRef<unknown | null>(null);

    const imageRef = useCallback((element: HTMLElement | null) => {
        if (element !== null) {
            lightboxRef.current = new Luminous(element, { sourceAttribute: 'src' });
        }
    }, []);

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <img ref={imageRef} src={src} alt={alt} {...others} />;
};
