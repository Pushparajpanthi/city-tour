import './Tour.scss';
import React, { Component } from 'react';

class Tour extends Component {
    constructor(){
        super()
        this.state = {
            showInfow:false
        }
        // this.showInfow = this.showInfow.bind(this)
    }


    showInfow=(id)=>{
            this.setState({
                showInfow:!this.state.showInfow
            })
    }

    render() {
        const{id,img,city,name, info}=this.props.tour
        return (
            <article className="tour">
                <div className="image-container">
                    <img
                    src={img} />
                    <span className="close-btn" onClick={()=>{this.props.removetour(id)}}>
                    <i className="fa fa-window-close" ></i>
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>info{""}<span onClick={this.showInfow}>
                        <i className="fa fa-caret-square-o-down"></i></span>
                        </h5>
                    {this.state.showInfow && <p>{info}</p> }
                    
                </div>
            </article>
        );
    }
}


export default Tour;