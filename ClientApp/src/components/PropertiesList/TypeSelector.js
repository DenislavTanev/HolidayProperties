import React from 'react';
import { useHistory } from 'react-router-dom';

const TypeSelector = () => {

    const history = useHistory();

    const onSelectType = (e) => {
        console.log(e.target.value);
        history.push(`/properties/${e.target.value}`);
    }

    return (

        <div className="col-sm-12">
            <div className="grid-option">
                <form>
                    <select className="custom-select" onChange={onSelectType}>
                        <option key="all" value="all">All</option>
                        <option key="hut" value="hut">Huts</option>
                        <option key="house" value="house">Houses</option>
                        <option key="apartment" value="apartment">Apartments</option>
                    </select>
                </form>
            </div>
        </div>
    );
}

export default TypeSelector;
