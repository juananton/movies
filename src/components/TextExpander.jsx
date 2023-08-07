import { useState } from 'react';

const TextExpander = ({
  children,
  btnColor = '#1f09cd',
  btnFontSize = 'inherit',
  collapsedNumWords = 10,
  expandButtonText = 'Show More',
  collapseButtonText = 'Show Less',
  expanded = false,
  className,
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const buttonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    paddingLeft: '0.5rem',
    cursor: 'pointer',
    fontSize: btnFontSize,
    color: btnColor,
  };

  const displayText = isExpanded
    ? children
    : `${children.split(' ').slice(0, collapsedNumWords).join(' ')}...`;

  const displayBtnText = isExpanded ? collapseButtonText : expandButtonText;

  return (
    <div className={className}>
      {displayText}
      <button style={buttonStyle} onClick={() => setIsExpanded(exp => !exp)}>
        {displayBtnText}
      </button>
    </div>
  );
};

export default TextExpander;
