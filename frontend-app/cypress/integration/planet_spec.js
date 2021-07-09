/* eslint-disable no-undef */
describe('Planet List Test', () => {
	it('Homepage Successfully loads', () => {
		cy.visit('/');
		cy.contains('Front-End Challenge');
		cy.document().its('contentType').should('eq', 'text/html');
		cy.get('.header').should('exist');
		cy.get('.App').should('exist');
		cy.get('body').should('have.css', 'background-color', 'rgb(242, 241, 241)');
	});
	it('Search Form loads', () => {
		cy.visit('/');
		cy.contains('Search List');
		cy.get('#form-search').should('exist');
		cy.get('input').first().focus();
		cy.get('input[name="planet"]').should('exist');
		cy.get('input[name="planet"]').should('have.length', 1);
	});
	it('Planet List loads', () => {
		cy.visit('/');
		cy.contains('Planets List');
		cy.get('.list-complete').should('exist');
		cy.intercept(
			{
				method: 'GET',
				url: '/https://swapi.dev/api/planets?search/*',
			},
			[],
		);
	});
	it('Footer laods', () => {
		cy.visit('/');
		cy.get('.footer').should('exist');
		cy.contains('Ariam Salazar');
	});
	it('Optional Clear Local Storage', () => {
		cy.visit('/');
		// cy.clearLocalStorage();
	});
});
