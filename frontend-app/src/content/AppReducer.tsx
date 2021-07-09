import { Planet } from '../interfaces/interfaces';

interface Planets {
	planetsList: Planet[]
}
interface Action{
	type: string;
	payload: Planet;
}

export default (state: Planets, action: Action): Planets => {
	switch (action.type) {
	case 'ADD_PLANET_TO_LIST':
		return {
			...state,
			planetsList: [action.payload, ...state.planetsList],
		};
	case 'REMOVE_PLANET_TO_LIST':
		return {
			...state,
			planetsList: state.planetsList.filter((item) => action.payload !== item),
		};
	default:
		return state;
	}
};
