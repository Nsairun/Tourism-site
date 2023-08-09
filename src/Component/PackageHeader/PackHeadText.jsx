/* eslint-disable react/prop-types */
import React from 'react';
import './PackageHeader.css';

function PackHeadText({ h1, h4, h5 }) {
  return (
    <div className="tour-package-header">
      <div className="tour-package-sub">
        <h1>{h1}</h1>
        <div className="tour-package-header-one">
          <h4>{h4}</h4>
          <div>
            <h5
              style={{
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
                gap: '1rem',
              }}
            >
              <i className="fa-sharp fa-solid fa-caret-right" />
              {h5}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackHeadText;
