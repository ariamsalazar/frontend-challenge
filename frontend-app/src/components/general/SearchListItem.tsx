import React from 'react';
import { Planet } from '../../interfaces/interfaces';
import { GlobalState } from '../../content/GlobalState';

interface IProps {
	planet: Planet;
}

export default function SearchListItem({ planet }: IProps): JSX.Element {
	return (
		<div>
			<span className="add-btn">
				{planet.name}
			</span>
		</div>
	);
}
