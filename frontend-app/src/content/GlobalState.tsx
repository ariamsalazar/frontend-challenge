import React, { createContext, useReducer, ReactNode } from 'react';

import { Planet } from '../interfaces/interfaces';
import AppReducer from './AppReducer';

interface Planets {
	planetsList: Planet[];
	addPlanetToList?: (planet: Planet) => void;
}

export type Props = {
	children: ReactNode;
};
// State Initial

const initialState = {
	planetsList: [],
	addPlanetsToList: (): void => { console.log(1); },
};

export const GlobalContenxt = createContext<Planets>(initialState);

export const GlobalProvider = (props: Props): JSX.Element => {
	const [state, dispatch] = useReducer(AppReducer, initialState);
	const { children } = props;

	// Actions
	const addPlanetToList = (planet: Planet): void => {
		dispatch({ type: 'ADD_PLANET_TO_LIST', payload: planet });
	};

	return (
		<GlobalContenxt.Provider value={{ planetsList: state.planetsList, addPlanetToList }}>
			{children}
		</GlobalContenxt.Provider>
	);
};
