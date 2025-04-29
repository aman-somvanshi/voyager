import React, { useState } from 'react';
import './ReadMoreLess.css';

function ReadMoreLess({ content, initialParagraphsToShow = 1, isParagraphs = false, truncateFirstParagraphAt = 200 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const displayedContent = () => {
    if (!isParagraphs) {
      return <p>{isExpanded ? content : `${content.slice(0, 150)}...`}</p>;
    } else {
      return content.map((paragraph, index) => {
        if (index === 0) {
          if (!isExpanded && paragraph.length > truncateFirstParagraphAt) {
            const truncatedText = paragraph.substring(0, truncateFirstParagraphAt) + '... ';
            return (
              <p key={index}>
                <span dangerouslySetInnerHTML={{ __html: truncatedText }} />
                <button onClick={toggleExpansion} className="read-more-inline">Read More</button>
              </p>
            );
          } else {
            return <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />;
          }
        } else if (isExpanded || index < initialParagraphsToShow) {
          return <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />;
        }
        return null;
      }).filter(Boolean);
    }
  };

  const shouldShowReadLess = isParagraphs && isExpanded && content.length > initialParagraphsToShow;

  return (
    <div>
      {displayedContent()}
      {shouldShowReadLess && (
        <button class = "button-footer" onClick={toggleExpansion} aria-expanded={isExpanded}>Read Less</button>
      )}
    </div>
  );
}

export default ReadMoreLess;