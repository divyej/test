import React from 'react';
import renderSkeletonRow from './Skeleton';

const SkeletonRows = () => (
  <>
    {Array.from({ length: 5 }).map((_, idx) => renderSkeletonRow())}
  </>
);

export default SkeletonRows;
