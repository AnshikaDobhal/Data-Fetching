import React, { Component } from 'react'
import ListItems from './ListItems'

export class List extends Component {
    data = []
    constructor() {
        super();
        console.log("this is constructor");
        this.state = {
            data: this.data,
            loading: false,
            page: 2
        }
    }

    async componentDidMount() {
        let url = "https://reqres.in/api/users?page=2";
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({ data: parseData.data })
    }

    handlePrevClick = async () => {
        let url = `https://reqres.in/api/users?page=${this.state.page - 1}`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            page: this.state.page - 1,
            data: parseData.data
        })
    }

    handleNextClick = async () => {
        let url = `https://reqres.in/api/users?page=${this.state.page + 1}`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            page: this.state.page + 1,
            data: parseData.data
        })
    }


    render() {
        return (
            <div className="container my-3">
                <h2>this is the list of employees</h2>

                <div className="row">
                    {this.state.data.map((element) => {
                        return <div className="col-md-4" key={element.id}>
                            <ListItems id={element.id} first_name={element.email} last_name={element.last_name} email={element.email} avatar={element.avatar} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>Previous</button>
                    <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next</button>
                </div>
            </div>
        )
    }
}

export default List
