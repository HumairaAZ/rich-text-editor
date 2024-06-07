import React from 'react';

const ImageComponent = ({ block, contentState }) => {
  const { src } = contentState.getEntity(block.getEntityAt(0)).getData();
  return (
    <div contentEditable={false} style={{ resize: 'both', overflow: 'auto' }}>
      <img src={src} alt="" style={{ width: '100%' }} />
    </div>
  );
};

export default ImageComponent;
