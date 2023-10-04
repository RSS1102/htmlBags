import React, { Suspense } from 'react';

const LazyLoad = (Comp: React.LazyExoticComponent<any>): React.ReactNode => {
  return (
    <Suspense>
      <Comp />
    </Suspense>
  );
};
export default LazyLoad;