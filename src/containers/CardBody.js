import React from 'react'

const CardBody = ({title, subtitle, key}) => {
  return (
    <div className="card" style={{ width: "100%" }}>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
  </div>
</div>
  )
}

export default CardBody