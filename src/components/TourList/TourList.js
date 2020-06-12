import Tour from '../Tour/Tour';
import "./TourList.scss";
import React, { Component } from 'react';
import tourData from './TourData';

class TourList extends Component {
    constructor() {
        super()
        this.state = {
            tours: tourData
        }
    }

    removeTour = (id) => {
        const filteredList = this.state.tours.filter(tour => tour.id !== id)
        this.setState({
            tours: filteredList
        })
    }


    render() {
        const { tours } = this.state;
        return (
            <section className="tour-list">
                {tours.map(tour => {
                    return (
                        <Tour key={tour.id} tour={tour} removetour={this.removeTour} />
                    )
                })}

            </section>
        );
    }
    }

export default TourList;