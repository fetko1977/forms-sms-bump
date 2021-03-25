import React, { Suspense } from 'react';

const Theme = ({ selectedTheme }:any):JSX.Element => {
    const SelectedTheme = React.lazy(() => import(`../../themes/${selectedTheme}`));
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SelectedTheme />
        </Suspense>
    );
};

export default Theme;