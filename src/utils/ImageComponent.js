import React, { useRef, useState } from 'react';

const ImageComponent = ({ block, contentState }) => {
  const { src } = contentState.getEntity(block.getEntityAt(0)).getData();
  const imageRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const onMouseDown = () => setIsDragging(true);
  const onMouseUp = () => setIsDragging(false);
  const onMouseMove = (e) => {
    if (isDragging) {
      imageRef.current.style.width = `${e.clientX - imageRef.current.getBoundingClientRect().left}px`;
    }
  };

  return (
    <div 
      contentEditable={false}
      style={{ resize: 'both', overflow: 'auto', display: 'inline-block' }}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    >
      <img 
        src={src} 
        alt="" 
        style={{ width: '100%' }} 
        ref={imageRef} 
        onMouseDown={onMouseDown} 
      />
    </div>
  );
};

export default ImageComponent;
