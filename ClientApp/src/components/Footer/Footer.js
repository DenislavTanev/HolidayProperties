import React from 'react';
import CopyrightFooter from './CopyrightFooter';
import FooterIntro from './FooterIntro';
import FooterSection from './FooterSection';

function Footer() {
    return (
        <>
            <section className="section-footer">
                <div className="container">
                    <div className="row">
                        <FooterIntro />
                        <FooterSection title="Properties" />
                        <FooterSection title="Company" />
                    </div>
                </div>
            </section>
            <CopyrightFooter />
        </>
    );
};

export { Footer };