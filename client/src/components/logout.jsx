import React from 'react'

const logout = () => {
    return (
        <div>
            <button onClick={() => localStorage.removeItem("token")}>Log out</button>
        </div>
    )
}

export default logout
