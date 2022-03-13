import React, { Component } from 'react'

const CleanLayout = (props) => {
  return (
    <div className="min-vh-100 d-flex justify-content-center w-100">
        {props.children}
    </ div>
  )
}

export default CleanLayout