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
		<div className="list-search">
			{addPlanetToList ? (
				<button className="add-btn" type="button" onClick={(): void => addPlanetToList(planet)} disabled={disableButton}>
					<span className="title-first">
						{planet.name}
					</span>
					<span className="title-second">
						- Terrain:
						{planet.terrain}
					</span>
					<span className="title-second">
						- Gravity:
						{planet.gravity}
					</span>
					<span className="title-second">
						- URL:
						{planet.url}
					</span>
				</button>
			)
				: null}
		</div>
	);
}
