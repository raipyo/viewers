import React from 'react';
import { ViewportGrid } from '@ohif/ui-next';

const HangingProtocol2x2 = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        gap: '5px',
        flex: 1,
      }}
    >
      {/* Top-left: current image */}
      <div style={{ backgroundColor: '#000' }}>
        <ViewportGrid viewportIndex={0} />
      </div>
      {/* Top-right: prior exam */}
      <div style={{ backgroundColor: '#000' }}>
        <ViewportGrid viewportIndex={1} />
      </div>
      {/* Bottom-left: bitewing */}
      <div style={{ backgroundColor: '#000' }}>
        <ViewportGrid viewportIndex={2} />
      </div>
      {/* Bottom-right: bitewing */}
      <div style={{ backgroundColor: '#000' }}>
        <ViewportGrid viewportIndex={3} />
      </div>
    </div>
  );
};

export default HangingProtocol2x2;
