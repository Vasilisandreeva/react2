import React from 'react';

const Comment = (props) => {
    const {id, name, email, body} = props;

    return (
        <div>
            <h3>{id}: {name}</h3>
            <ol>
                <li>{email}</li>
                <li>{body}</li>
            </ol>
        </div>
    );
}

export default Comment;
