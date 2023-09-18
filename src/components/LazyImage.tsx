'use client';
import React, { useState, useEffect, useRef } from 'react';

const placeHolder =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=';
export interface LazyImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

const LazyImage = ({
  src,
  alt,
  width = '100px',
  height = '100px',
  ...rest
}: LazyImageProps) => {
  const [imageSrc, setImageSrc] = useState(placeHolder);
  const [classes, setClasses] = useState<any>({
    loaded: false,
    'has-error': false,
  });

  const imgRef = useRef<HTMLImageElement>(null);

  const onLoad = () => {
    setClasses({
      ...classes,
      loaded: true,
    });
  };

  const onError = () => {
    setClasses({
      ...classes,
      'has-error': true,
    });
  };

  useEffect(() => {
    let observer: IntersectionObserver;
    let didCancel = false;

    if (imgRef && imgRef.current && imageSrc !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(src);
                if (imgRef.current) observer.unobserve(imgRef.current);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: '75%',
          }
        );
        observer.observe(imgRef.current);
      } else {
        // Old browsers fallback
        setImageSrc(src);
      }
    }
    return () => {
      didCancel = true;
      // on component cleanup, we remove the listner
      if (observer && observer.unobserve && imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src, imageSrc, imgRef]);
  return (
    <img
      width={width}
      height={height}
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      onLoad={onLoad}
      onError={onError}
      className={Object.keys(classes)
        .filter((cls) => classes[cls])
        .join(' ')}
      {...rest}
    />
  );
};

export default LazyImage;
