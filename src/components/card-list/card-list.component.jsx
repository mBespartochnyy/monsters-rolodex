import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = props => (
	<div className='card-list'>
		{/* this.state.monsters is an array. */}
		{/* take that array and for each value in it, create an <h1> tag with monster name as the text. */}
		{
			props.monsters.map(monster => (
			<Card key={monster.id} monster={monster}/>
		))}
	</div>
);
