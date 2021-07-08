import React, { useContext } from 'react';
import { Planet } from '../../interfaces/interfaces';
import { GlobalContenxt } from '../../content/GlobalState';

interface IProps {
	planet: Planet;
}

export default function SearchListItem({ planet }: IProps): JSX.Element {
	const { addPlanetToList, planetsList } = useContext(GlobalContenxt);
	const storedPlanets = planetsList.find((o) => o.name === planet.name);
	const disableButton = !!storedPlanets;
	return (
		<div className="list-search-item">
			{addPlanetToList ? (
				<button className="add-btn" type="button" onClick={(): void => addPlanetToList(planet)} disabled={disableButton}>
					{planet.name}
				</button>
			)
				: null}
		</div>
	);
}
