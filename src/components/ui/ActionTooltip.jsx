import React from 'react';

const ActionTooltip = ({ children, text }) => {
  return (
    // Kita tambahkan inline-block dan pastikan pointer-events aman
    <div className="tooltip tooltip-left inline-block" data-tip={text}>
      {children}
    </div>
  );
};

export default ActionTooltip;