// searchResultsPage.js

import "cypress-real-events/support";

class SearchResultsPage {
    // Define locators as private properties
    #locators = {
        PRODUCT_LINK: 'a[data-id="40611284844631"]',
        DROPDOWN_OPTIONS: '.kuDropdownOptions',
        SORT_BY_DROPDOWN: 'div[role="listbox"] div[class="kuDropdownLabel"]',
        SORT_BY_OPTION: '.kuDropdownOptions div.kuDropOption',
        PRODUCT_PRICE: '[data-testid="product-price"]',
        PRODUCT_ITEM: 'a[title="Ascending Track"]',
        VISIBLE_PRICE: 'span.kuSalePrice.kuSpecialPrice:visible',
    };

    // Method to visit the search results page
    visit() {
        cy.visit('https://faoschwarz.com/pages/search-results?type=product%2Carticle%2Cpage%2Ccollection&options%5Bprefix%5D=last&q=cars');
    }

    // Method to verify a product is visible
    verifyProductIsVisible() {
        cy.get(this.#locators.PRODUCT_LINK, { timeout: 10000 })
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                cy.log('Product text: ' + text);
                expect(text).to.contain('Cars');
            });
    }

    // Method to sort search results from low to high
    sortResultsByLowToHigh() {
        // Ensure the dropdown options are initially not visible
        cy.get(this.#locators.DROPDOWN_OPTIONS, { timeout: 10000 })
            .should('not.be.visible');

        // Trigger hover and click on the sort by dropdown to reveal options
        cy.get(this.#locators.SORT_BY_DROPDOWN).realHover('mouse');

        // Ensure dropdown options are visible
        cy.get(this.#locators.DROPDOWN_OPTIONS, { timeout: 10000 })
            .should('be.visible');

        // Click on the "Price: Low to high" option
        cy.get(this.#locators.SORT_BY_OPTION)
            .contains('Price: Low to high', { matchCase: false })
            .should('be.visible')
            .click();

        // Optionally, verify that the dropdown label text has changed
        cy.get(this.#locators.DROPDOWN_OPTIONS)
            .should('contain.text', 'Price: Low to high');
    }

    // Method to verify that the results are sorted by price
    verifyResultsSorted() {
        cy.get(this.#locators.VISIBLE_PRICE)
            .should('have.length.gt', 0)
            .then(($prices) => {
                // Extract text, convert to number, and create an array
                const prices = [...$prices].map((price) => {
                    const priceText = price.innerText.trim().replace('$', '').replace(',', '');
                    const priceValue = parseFloat(priceText);
                    console.log('priceValue:', priceValue);
                    return priceValue;
                });

                // Check for NaN values
                const hasNaN = prices.some(isNaN);
                if (hasNaN) {
                    cy.log('Warning: Some prices are NaN');
                }

                // Log the extracted prices
                cy.log('Extracted Prices:' + prices);

                // Create a sorted copy of the prices array for comparison
                const sortedPrices = [...prices].sort((a, b) => a - b);

                // Log the sorted prices
                cy.log('Sorted Prices:' + sortedPrices);
                console.log('Extracted Prices:', prices);
                console.log('Sorted Prices:', sortedPrices);

                // Assert that the original prices are sorted
                expect(prices).to.deep.equal(sortedPrices);
            });
    }

    // Method to click on the first product in the search results
    clickFirstProduct() {
        cy.get(this.#locators.PRODUCT_ITEM).first().click();
    }
}

export default SearchResultsPage;
