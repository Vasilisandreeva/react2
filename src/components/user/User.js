import React from 'react';

const User = (props) => {
    const {id, name, username, email, street} = props;

    return (
        <div>
            {id} - {name} {username}
            <ol>
                <li>{email}</li>
                <li>{street}</li>
            </ol>
        </div>
    );
}

export default User;
