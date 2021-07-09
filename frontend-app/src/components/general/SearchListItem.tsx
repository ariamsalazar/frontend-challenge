import React, { useContext } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Planet } from '../../interfaces/interfaces';
import { GlobalContenxt } from '../../content/GlobalState';

interface IProps {
	planet: Planet
}

export default function SearchListItem({ planet }: IProps): JSX.Element {
	const { addPlanetToList, planetsList } = useContext(GlobalContenxt);
	const storedPlanets = planetsList.find((o) => o.name === planet.name);
	const disableButton = !(storedPlanets == null);
	return (
		<div className="add-btn">
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
					{(addPlanetToList != null)
						? (
							<Button type="button" color="primary" className="btn-item mt-1" onClick={(): void => addPlanetToList(planet)} disabled={disableButton} />
						)
						: null}
				</Col>
			</Row>
		</div>
	);
}
