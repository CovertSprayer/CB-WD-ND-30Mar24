import React from 'react'

function Person(props) {
  return (
    <div style={{
        border: "2px solid black",
        backgroundColor: "yellow",
        marginBottom: "10px"
      }}>
      <p>Name: {props.name}</p>
      <p>Profession: {props.profession}</p>
      <p>Address: {props.address}</p>
    </div>
  )
}

export default Person