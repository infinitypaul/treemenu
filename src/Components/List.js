import React, { } from 'react';
import Node from "./getNode";
import PropTypes from 'prop-types';

const List = (props) => {
    const { items, selectedItem, onClick } = props;

    const handleItemClicked = (selectedItemId) => {
        if(selectedItem[selectedItemId]){
            //remove from parent
            delete selectedItem[selectedItemId];
        } else {
            //not selected
            selectedItem[selectedItemId] = {};
        }
        onClick(selectedItem);
    };
    const handleSubItemListChange = (itemId, subList) => {
        selectedItem[itemId] = subList;
        onClick(selectedItem);
    };

    return (
        <div>
        {items.map(item => (
            <ul key={item.slug}>
                <Node
                    toggle={selectedItem.hasOwnProperty(item.slug)}
                    selected={selectedItem[item.slug]}
                    label={item.title}
                    onClick={() => {handleItemClicked(item.slug)}}
                />
                {/*Base Case*/}
                {(item.children.length > 0 && selectedItem[item.slug]) &&
                <List
                    items={item.children}
                    selectedItem={selectedItem[item.slug]}
                    onClick={(subChildren) => handleSubItemListChange(item.slug, subChildren)}
                />
                }
            </ul>
            ))}
        </div>
    )

};

List.propTypes = {
    items: PropTypes.array.isRequired,
    selectedItem: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

export default List;