import React, { useState } from 'react';

import {
	Container, Row, Col, Form, FormGroup, Label, Input,
} from 'reactstrap';

import { ListItem, Planet } from '../interfaces/interfaces';
import { querySearchPlanet } from '../models/query';

import Header from './Header';
import Footer from './Footer';
import PlanetList from './general/PlanetList';
import SearchListItem from './general/SearchListItem';

export default function Homepage(): JSX.Element {
	const [text, setText] = useState<string>('');
	const [results, setResults] = useState<Planet[]>([]);

	async function inputHandler(event: React.ChangeEvent<HTMLInputElement>): Promise<void> {
		const enteredText = event.target.value;
		setText(enteredText);
		const urlAPI = 'https://swapi.dev/api/planets?search=';
		const res = await querySearchPlanet<ListItem>(`${urlAPI}${enteredText}`);

		if (res) setResults(res.results);
		else setResults([]);
	}

	return (
		<div>
			<Header />
			<Container>
				<Row>
					<Col xs="12" className="mt-4 mb-4">
						<Form>
							<FormGroup>
								<Label for="exampleEmail">Search List</Label>
								<Input type="text" name="planet" id="planet" placeholder="Enter keyphrase" value={text} onChange={inputHandler} />
							</FormGroup>
						</Form>
					</Col>
					<Col xs="12" className="mt-4 mb-4">
						{results.length > 0
							? (
								<div>
									{results.map((item: Planet) => (
										<div key={`key-${item.name}`} className="element">
											<SearchListItem planet={item} />
										</div>
									))}
								</div>
							)
							: <span> No results for this search </span> }
					</Col>
				</Row>
			</Container>
			<PlanetList />
			<Footer />
		</div>
	);
}
