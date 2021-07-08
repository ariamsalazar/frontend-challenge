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
				<Col xs="2">
					<span className="title-first">
						{planet.name}
					</span>
				</Col>
				<Col xs="2">
					<span className="title-second">
						{planet.gravity}
					</span>
				</Col>
				<Col xs="3">
					<span className="title-second">
						{planet.terrain}
					</span>
				</Col>
				<Col xs="3">
					<span className="title-second">
						{planet.url}
					</span>
				</Col>
				<Col xs="2" className="text-right">
					{removePlanetFromList
						? (
							<Button type="button" color="danger" className="btn-item delete mt-1" onClick={(): void => removePlanetFromList(planet)} />
						)
						: null }
				</Col>
			</Row>
		</div>
	);
}
