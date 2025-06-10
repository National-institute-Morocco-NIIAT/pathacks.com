import React from 'react'

const LoadingSpinnerInline = () => {
  return (
    <div
      style={{
        zIndex: 1
      }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="spinner-border text-primary" role="status">
        <h1 className="visually-hidden">Loading...</h1>
      </div>
    </div>
  )
}

export default LoadingSpinnerInline
