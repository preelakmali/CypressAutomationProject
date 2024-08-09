class SearchResultsPage {
    // Locators
    productLinkLocator = 'a[data-id="40611284844631"]';
    dropdownOptionsLocator = '.kuDropdownOptions';
    sortByDropdownLocator = '.kuDropSortBy > .kuDropdownLabel';
    sortByOptionLocator = '.kuDropdownOptions div.kuDropOption';
    productPriceLocator = '[data-testid="product-price"]';
    productItemLocator = '.klevuProduct grid-product__has-quick-shop';
    

    

    // Actions
    visit() {
        cy.visit('https://faoschwarz.com/pages/search-results?type=product%2Carticle%2Cpage%2Ccollection&options%5Bprefix%5D=last&q=cars');
    }

    verifyProductIsVisible() {
        cy.get(this.productLinkLocator, { timeout: 10000 })
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                cy.log('Product text: ' + text);
                expect(text).to.contain('Cars');
            });
    }

    sortResultsByLowToHigh() {
        // Ensure the dropdown options are initially not visible
        cy.get(this.dropdownOptionsLocator, { timeout: 10000 })
            .should('not.be.visible');

        // Trigger hover and click on the sort by dropdown to reveal options
        cy.get(this.sortByDropdownLocator)
            .trigger('mouseover')
            .click();

        // Ensure dropdown options are visible
        cy.get(this.dropdownOptionsLocator, { timeout: 10000 })
            .should('be.visible');

        // Click on the "Price: Low to high" option
        cy.get(this.sortByOptionLocator)
            .contains('Price: Low to high', { matchCase: false })
            .should('be.visible')
            .click();

        // Optionally, verify that the dropdown label text has changed
        cy.get(this.dropdownLabelLocator)
            .should('contain.text', 'Price: Low to high');
    }

    verifyResultsSorted() {
        // Verify that the results are sorted correctly
        cy.get(this.productPriceLocator).then(($prices) => {
            const priceArray = $prices.toArray().map(el => parseFloat(el.innerText.replace('$', '')));
            const sortedPriceArray = [...priceArray].sort((a, b) => a - b);
            expect(priceArray).to.deep.equal(sortedPriceArray);
        });
    }

    clickFirstProduct() {
        // Click the first product in the list
        cy.get(this.productItemLocator).first().click();
        
    }

   



   


}
export default SearchResultsPage;


