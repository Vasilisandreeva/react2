import React from 'react';

const Comment = (props) => {
    const {id, name, email, body} = props;

    return (
        <div>
            <h3>{id}: {name}</h3>
            {email}
            {body}
        </div>
    );
}

export default Comment;
