import React from 'react';
import FooterSectionItem from './FooterSectionItem';
import { GetItem } from './GetItems';

const FooterSection = ({ title, }) => {

    const items = GetItem(title);

    return (
        <div className="col-sm-12 col-md-4 section-md-t3">
            <div className="widget-a">
                <div className="w-header-a">
                    <h3 className="w-title-a text-brand">{ title }</h3>
                </div>
                <div className="w-body-a">
                    <div className="w-body-a">
                        <ul className="list-unstyled">
                            {
                                items.map(x => <FooterSectionItem key={x.id} link={x.link} title={x.title} />)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterSection;