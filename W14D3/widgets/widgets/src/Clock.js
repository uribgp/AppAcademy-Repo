import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date()
        }
    }

    tick = () => {
        this.setState({time: new Date()})
    }

    componentDidMount(){
        this.interval = setInterval(this.tick, 1000);
    }

    render() {
        return (
            <div id="main">
                <h1>Clock</h1>
                <div className='clock'>
                    <p>
                        <span>TIME:</span>
                        <span>{this.state.time.getHours()}</span>
                        <span>:</span>
                        <span>{this.state.time.getMinutes()}</span>
                        <span>:</span>
                        <span>{this.state.time.getSeconds()}</span>
                        <span>MT</span>
                    </p>
                    <p>
                        <span>Date: {this.state.time.toDateString()}</span>
                        <span></span>
                    </p>
                </div>
            </div>
        )
    }

}

export default Clock;