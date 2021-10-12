import React, { Component } from 'react'

export class ListItems extends Component {
    render() {
        let { id, email, first_name, last_name, avatar } = this.props
        return (
            <div>
                <div className="card">
                    <img src={avatar} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{id}</h5>
                        <h5 className="card-title">{first_name}</h5>
                        <h5 className="card-title">{last_name}</h5>
                        <p className="card-text">{email}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListItems
