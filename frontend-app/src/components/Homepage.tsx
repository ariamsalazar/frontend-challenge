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

		if (enteredText === '') setResults([]);
	}

	return (
		<div>
			<Header />
			<Container>
				<Row className="justify-content-md-center">
					<Col xs="10" className="mt-4 mb-4">
						<Form className="text-left">
							<FormGroup>
								<Label for="planet" className="title-search mb-2">
									Search List
								</Label>
								<Input type="text" name="planet" id="planet" placeholder="Search..." value={text} onChange={inputHandler} />
							</FormGroup>
						</Form>
					</Col>
					<Col xs="10" className="mt-4 mb-4">
						{results && results.length > 0
							? (
								<div>
									{results.map((item: Planet) => (
										<div key={`key-${item.name}`} className="element">
											<SearchListItem planet={item} />
										</div>
									))}
								</div>
							)
							: <span className="text-error"> No results for this search </span> }
					</Col>
					<PlanetList />
				</Row>
			</Container>
			<Footer />
		</div>
	);
}
