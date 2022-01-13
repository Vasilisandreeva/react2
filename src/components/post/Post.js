import React from 'react';

const Post = (props) => {
    const {id, title, body} = props;

    return (
        <div>
            <h3>{id}: {title}</h3>
            {body}
        </div>
    );
}

export default Post;
