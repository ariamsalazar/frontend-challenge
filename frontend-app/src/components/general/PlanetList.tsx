import React, { useContext } from 'react';
import { Planet } from '../../interfaces/interfaces';
import PlanetListItem from './PlanetListItem';
import { GlobalContenxt } from '../../content/GlobalState';

export default function PlanetList(): JSX.Element {
	const { planetsList } = useContext(GlobalContenxt);

	return (
		<div className="list-final">
			Planets List
			{planetsList.map((item: Planet) => (
				<div key={`key-intern-list-${item.name}`} className="element">
					<PlanetListItem planet={item} />
				</div>
			))}
		</div>
	);
}
