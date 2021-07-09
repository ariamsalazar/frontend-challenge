import React, { useContext } from 'react';
import { Col } from 'reactstrap';
import { Planet } from '../../interfaces/interfaces';
import PlanetListItem from './PlanetListItem';
import { GlobalContenxt } from '../../content/GlobalState';

export default function PlanetList(): JSX.Element {
	const { planetsList } = useContext(GlobalContenxt);

	return (
		<Col xs="10" className="mt-4 mb-4">
			<div className="list-final text-left">
				<span className="list-title text-left">
					Planets List
				</span>
				{planetsList.map((item: Planet) => (
					<div key={`key-intern-list-${item.name}`} className="element">
						<PlanetListItem planet={item} />
					</div>
				))}
			</div>
		</Col>
	);
}
