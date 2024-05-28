'use client';

import { useState } from 'react';

type TextExpanderProps = {
  text: string;
};

export function TextExpander({ text }: TextExpanderProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayText = isExpanded
    ? text
    : text.split(' ').slice(0, 40).join(' ') + '...';

  return (
    <span>
      {displayText}{' '}
      <button
        className="border-b border-primary-700 pb-1 leading-3 text-primary-700"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Show less' : 'Show more'}
      </button>
    </span>
  );
}
