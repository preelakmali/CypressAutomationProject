
import { URLs, TEXTS } from '../support/constants';

class HomePage {
    // Define locators as private properties
    #locators = {
        HOME_PAGE_BODY: 'body',
        SEARCH_BAR: 'form.input-group.search-bar.search-bar--page',
        SEARCH_BUTTON: 'form.input-group.search-bar.search-bar--page button[type="submit"]',
        SEARCH_RESULTS_HEADER: 'h1',
    };

    // Method to visit the home page
    visit() {
        cy.visit(URLs.HOME_PAGE);
    }

    // Method to verify the home page is loaded
    verifyHomePageLoaded() {
        cy.url().should('include', 'faoschwarz.com');
        cy.get(this.#locators.HOME_PAGE_BODY).should('be.visible');
    }

    // Method to verify the search layout is visible
    verifySearchLayout() {
        cy.get(this.#locators.SEARCH_BAR).should('be.visible');
    }

    // Method to perform a search by clicking the search button
    performSearch() {
        cy.get(this.#locators.SEARCH_BUTTON).click();
    }

    // Method to verify the search results header is correct
    verifySearchResults() {
        cy.get(this.#locators.SEARCH_RESULTS_HEADER).should('have.text', 'Search Results');
    }
}

export default HomePage;
