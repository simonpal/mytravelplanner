import { PropsWithChildren } from 'react';
import '@/styles/components/card.scss';
import LazyImage from './LazyImage';

interface CardProps extends PropsWithChildren {
  image?: string;
}

const Card = ({ image, children }: CardProps) => {
  return (
    <div className="card">
      {image && <LazyImage src={image} alt="Test" />}
      <div className="card-content">{children}</div>
    </div>
  );
};

export default Card;
