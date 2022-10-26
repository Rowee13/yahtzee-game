import React, { Component } from "react";
import Die from "./Die";

import "./Dice.css";

class Dice extends Component {
	render() {
		return (
			<div>
				{this.props.dice.map((d, idx) => {
					return (
						<Die
							key={idx}
							id={idx}
							val={d}
							locked={this.props.locked[idx]}
							handleClick={this.props.handleClick}
						/>
					);
				})}
			</div>
		);
	}
}

export default Dice;
