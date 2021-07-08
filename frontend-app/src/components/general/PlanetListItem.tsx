import React, { useContext } from 'react';
import { Button } from 'reactstrap';
import { Planet } from '../../interfaces/interfaces';
import { GlobalContenxt } from '../../content/GlobalState';

interface IPropsItem {
	planet: Planet;
}

export default function PlanetListItem({ planet }: IPropsItem): JSX.Element {
	const { removePlanetFromList } = useContext(GlobalContenxt);

	return (
		<div className="list-final-item">
			{planet.name}
			{removePlanetFromList
				? (
					<Button type="button" className="delete-item" onClick={(): void => removePlanetFromList(planet)}>
						Delete
					</Button>
				)
				: null }
		</div>
	);
}
