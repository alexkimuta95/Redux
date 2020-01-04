import React from 'react'

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>React Redux</h1>
        </header>
    )
}
const headerStyle={
    color:'#fff',
    background:'#333',
    padding: '0 1rem',
    textAlign:'center'
}
