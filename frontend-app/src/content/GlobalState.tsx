import React, {
	createContext, useReducer, useEffect, ReactNode,
} from 'react';

import { Planet } from "../interfaces/interfaces";
import AppReducer from './AppReducer';

interface Planets {
	planetsList: Planet[]
	addPlanetToList?: (planet: Planet) => void
	removePlanetFromList?: (planet: Planet) => void
}

export interface Props {
	children: ReactNode
}

// State Initial
const localS = JSON.parse(localStorage.getItem('planetsList') || '');
const initialState = {
	planetsList: localStorage.getItem('planetsList') ? localS : [],
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	addPlanetToList: (): void => {},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	removePlanetFromList: (): void => {},
};

export const GlobalContenxt = createContext<Planets>(initialState);

export const GlobalProvider = (props: Props): JSX.Element => {
	const [state, dispatch] = useReducer(AppReducer, initialState);
	const { children } = props;

	// LocalStorage PlanetList
	useEffect(() => {
		window.localStorage.setItem('planetsList', JSON.stringify(state.planetsList));
	}, [state]);

	// Actions
	const addPlanetToList = (planet: Planet): void => {
	dispatch({ type: 'ADD_PLANET_TO_LIST', payload: planet })
	};
	const removePlanetFromList = (planet: Planet): void => {
		dispatch({ type: 'REMOVE_PLANET_TO_LIST', payload: planet });
	};

	// Global Provider
	return (
		<GlobalContenxt.Provider value={{ planetsList: state.planetsList, addPlanetToList, removePlanetFromList }}>
			{children}
		</GlobalContenxt.Provider>
	);
};
