import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoList from './TodoList';

class TodoItem extends Component {
    render() {
        return this.props.items.map((item)=>(
            <TodoList 
                key={item.id} 
                item={item} 
                onClick={this.props.onClick} 
                // markDone={this.props.markDone}
            />
        ));
    }
}

TodoItem.propTypes = {
    items: PropTypes.array.isRequired
}

export default TodoItem; 
