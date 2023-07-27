import React, { useRef, useEffect } from "react";
import { OverlayTrigger, Tooltip, Popover, PopoverHeader, PopoverBody } from 'react-bootstrap';

import "../../css/LazyImage.css";

type LazyImageProps = {
    src: string;
    alt?: string;
};

const LazyImage: React.FC<LazyImageProps> = ({ src, alt }) => {
    const imageRef = useRef<any>(null);
    const [isIntersecting, setIsIntersecting] = React.useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log(entry);
                if (entry.isIntersecting) {
                    setIsIntersecting(entry.isIntersecting);
                }
            },
            { rootMargin: "-300px" }
        );

        observer.observe(imageRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isIntersecting) {
            const dataSrc = imageRef.current.getAttribute("data-src");
            if (dataSrc) {
                imageRef.current.src = dataSrc;
            }
        }
    }, [isIntersecting]);


    return (
        <OverlayTrigger placement="auto" overlay={(
            <Popover className="bg-primary">
                <PopoverBody className="text-white">
                    URL: {src} 
                    <br />
                    <br />
                    Uploaded 2 days ago
                </PopoverBody>
          </Popover>
        )}>
            <img
                data-test-id="component-image"
                className="lazy-image"
                ref={imageRef}
                src={src + `?w=10`}
                alt={alt}
                data-src={src + `?w=1800`}
            />
        </OverlayTrigger>
    );
};

export default LazyImage;