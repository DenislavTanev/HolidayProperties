import React from 'react';

function Preloader() {

    return (
        <>
            <div id="preloader"></div>
            <a href="index.html" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </>
    );
}

export { Preloader };