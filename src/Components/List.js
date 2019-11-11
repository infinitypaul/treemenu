import React, { } from 'react';
import Node from "./getNode";
import PropTypes from 'prop-types';

const List = (props) => {
    const { items, selectedItem, onClick } = props;
    console.log(items);
    const handleItemClicked = (selectedItemId) => {
        //console.log(selectedItem[selectedItemId]);
        //console.log(selectedItem.hasOwnProperty(selectedItemId));
        if(selectedItem[selectedItemId]){
            //remove from parent
            //console.log('delete '+selectedItemId);
            delete selectedItem[selectedItemId];
        } else {
            //not selected
            selectedItem[selectedItemId] = {};
            //console.log(selectedItem[selectedItemId])
        }
        onClick(selectedItem);
        //console.log(selectedItem)
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