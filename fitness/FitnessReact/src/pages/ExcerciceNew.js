import React, { Component } from 'react';

export default class notFound extends Component{

    state = {
        title: '',
        description: '',
        img: '',
        leftColor: '',
        rightColor: ''
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);    
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render(){
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="title" name="title" value={this.state.title} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="description" name="description" value={this.state.description} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="img" name="img" value={this.state.img} onChange={this.handleChange} />
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="leftColor" name="leftColor" value={this.state.leftColor} onChange={this.handleChange} />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="rightColor" name="rightColor" value={this.state.rightColor} onChange={this.handleChange} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}