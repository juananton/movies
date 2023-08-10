import { useState } from 'react';
import Star from './Star';

//RATING///

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
};

const starContainerStyle = {
  display: 'flex',
};

const StarRating = ({
  maxRating = 5,
  color = '#fcc419',
  size = 24,
  className = '',
  messages = [],
  defaultRating = 0,
  onSetRating,
}) => {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const textStyle = {
    lineHeight: '1',
    margin: '0',
    color,
    fontSize: `${size * 0.75}px`,
  };

  function handleRating(rating) {
    setRating(rating);
    onSetRating(rating);
  }

  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            color={color}
            size={size}
            onSetRating={rating}
          />
        ))}
      </div>
      <p style={textStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ''}
      </p>
    </div>
  );
};

export default StarRating;
