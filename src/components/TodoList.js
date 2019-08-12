import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoList extends Component {
    getStyle= () => {
      return {
          background: '#f4f4f4',
          padding: '10px',
          borderBottom: '1px #ccc dotted',
          textDecoration: this.props.item.done ? 'line-through' : 'none'
      }
    }

    render() {
        const { text } = this.props.item;
        // const { id } = this.props.item;
        return (
            <div style={this.getStyle()}>
               <li onClick={this.props.onClick.bind(this, text)}>
                    {/* <input type="checkbox" onChange={this.props.markDone.bind(this, id)}/>{' '} */}
                     {text}
                </li> 
            </div>
        )
    }
}

TodoList.propTypes = {
    item: PropTypes.array.isRequired
}

export default TodoList;
