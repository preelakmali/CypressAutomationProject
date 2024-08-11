

class ProductPage {
    // Define locators as private properties
    #locators = {
        PRODUCT_PRICE: 'span.product__price.on-sale',
        QUANTITY_ADJUST_PLUS: '.js-qty__adjust--plus',
        QUANTITY_INPUT: '#Quantity-template--15822213775447__main7026099880023',
        SHADOW_QUANTITY_INPUT: '#Quantity-template--15822213775447__main1565157982295',
        ADD_TO_CART_BUTTON: '#AddToCart-',
    };

    // Method to visit the product page
    visit() {
        cy.visit('https://faoschwarz.com/pages/search-results?type=product%2Carticle%2Cpage%2Ccollection&options%5Bprefix%5D=last&q=cars');
    }

    // Method to verify product page navigation
    verifyProductPageNavigation() {
        cy.url().should('include', 'product');
    }

   // Method to get the product price
    getProductPrice() {
        return cy.get(this.#locators.PRODUCT_PRICE)
            .invoke('text')
            .then((priceText) => {
                // Clean the text to remove non-numeric characters except the dot
                const cleanedPrice = priceText.replace(/[^0-9.]/g, '');
                // Convert to a floating-point number and round down to an integer
                const productPrice = Math.floor(parseFloat(cleanedPrice));
                // Log the product price
                cy.log('Product Price:', productPrice);
                // return productPrice; // Return the price for chaining
            });
    }

    // Method to increase the quantity of products
    increaseQuantity() {
        cy.get(this.#locators.QUANTITY_ADJUST_PLUS).click().click();
    }

    // Method to get the quantity input element
    getQuantityInput() {
        return cy.get(this.#locators.QUANTITY_INPUT);
    }

    // Method to verify that the quantity has increased
    verifyItemsQuantityIncreased() {
        cy.get(this.#locators.SHADOW_QUANTITY_INPUT).then(($el) => {
            // Access the shadow root of the element
            const shadowRoot = $el[0].shadowRoot;

            // Check if shadow root exists
            if (shadowRoot) {
                cy.wrap(shadowRoot)
                    .find('div[contenteditable="plaintext-only"]')
                    .invoke('text')
                    .then((text) => {
                        cy.log('Text inside shadow DOM:', text);
                        expect(text).to.equal('3');
                    });
            } else {
                // Log an error if shadow root is not found
                cy.log('No shadow root found');
            }
        });
    }

    // Method to add the product to the cart
    addToCart() {
        cy.get(this.#locators.ADD_TO_CART_BUTTON).click();
    }
}

export default ProductPage;
