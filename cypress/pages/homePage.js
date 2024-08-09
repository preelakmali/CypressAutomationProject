class HomePage {
    // Locators
    homePageBodyLocator = 'body';
      searchIBarPage = 'form.input-group.search-bar.search-bar--page';
      searchButtonLocator = 'form.input-group.search-bar.search-bar--page button[type="submit"]';
      searchResultsHeaderLocator = 'h1';

    // Actions
    visit() {
        cy.visit('https://faoschwarz.com/search?q=cars');
    }

    verifyHomePageLoaded() {
        cy.url().should('include', 'faoschwarz.com');
        cy.get(this.homePageBodyLocator).should('be.visible');
    }
     verifySearchLayout() {
  
         cy.get(this.searchIBarPage).should('be.visible');
     }
 
     performSearch() {
         cy.get(this.searchButtonLocator).click();
     }
 
     verifySearchResults() {
         cy.get(this.searchResultsHeaderLocator).should('have.text', 'Search Results');
     }
}

export default HomePage;
