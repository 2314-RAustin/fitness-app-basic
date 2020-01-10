import React, { Component } from 'react';

export default class notFound extends Component{

    state = {
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);    
    }
    
    render(){
        const { onChange, form } = this.props;
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="title" name="title" value={form.title} onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="description" name="description" value={form.description} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="img" name="img" value={form.img} onChange={onChange} />
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="leftColor" name="leftColor" value={form.leftColor} onChange={onChange} />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="rightColor" name="rightColor" value={form.rightColor} onChange={onChange} />
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