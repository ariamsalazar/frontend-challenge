import React, { useContext } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Planet } from '../../interfaces/interfaces';
import { GlobalContenxt } from '../../content/GlobalState';

interface IPropsItem {
	planet: Planet;
}

export default function PlanetListItem({ planet }: IPropsItem): JSX.Element {
	const { removePlanetFromList } = useContext(GlobalContenxt);

	return (
		<div className="list-final-item">
			<Row>
				<Col xs="8">
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
				</Col>
				<Col xs="4" className="text-right">
					{removePlanetFromList
						? (
							<Button type="button" color="primary" className="delete-item mt-4" onClick={(): void => removePlanetFromList(planet)}>
								Delete
							</Button>
						)
						: null }
				</Col>
			</Row>
		</div>
	);
}
