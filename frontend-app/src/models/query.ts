type RequestInfo = string;

async function querySearchPlanet<T>(request: RequestInfo): Promise<T> {
	const response = await fetch(request);
	const body = await response.json();
	return body;
}

export {
	querySearchPlanet,
};
