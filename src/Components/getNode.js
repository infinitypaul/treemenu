import React from 'react';
import styled from 'styled-components';
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import PropTypes from 'prop-types';

const NodeIcon = styled.div`
  font-size: 12px;
  margin-right: ${props => props.marginRight ? props.marginRight : 5}px;
`;

const NodeWrapper = styled.div`
  display: flex;
  flexDirection: row;
  alignItems: center;
  padding: 5px 8px;
  cursor: pointer
`;

const getNode = (props) => {
    const { selected, label, onClick, toggle } = props;
    return (
        <NodeWrapper>
            <NodeIcon onClick={() => onClick(!selected)}>
                { toggle ? <FaMinusSquare/> : <FaPlusSquare/> }
            </NodeIcon>
            <div className="label" onClick={() => onClick(!selected)}>{label}</div>
        </NodeWrapper>
    )
};

getNode.propTypes = {
    toggle: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default getNode;