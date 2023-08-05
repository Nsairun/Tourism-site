import React from 'react';
// import NavBar from '../subheader/SubHeader';
import PackHeadText from './PackHeadText';
import './PackageHeader.css';

function PackageHeader() {
  return (
    <div className="tour-package-header">
      <PackHeadText h1="Gallery" h4="Home" h5="Gallery" />
    </div>
  );
}

export default PackageHeader;
