import React from 'react'

const Reviews = ({reviews}) => {
    return (
        <div className="row row-cols-3 mb-2">
            <div className="card text-white bg-primary mb-3 mb-4" style={{ maxWidth: "30%" }}>
                <div className="card-header d-flex justify-content-between">Header</div>
                <div className="card-body">
                    <p className="card-text">Some quick example text </p>
                </div>
            </div>
        </div>
    )
}

export default Reviews
