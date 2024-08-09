

class ProductPage {
    visit() {
        cy.visit('https://faoschwarz.com/products/3-pack-nyc-wooden-cars-taxi-police-car-ambulance');
    }

    getProductPrice() {
        return cy.get('.product__price').invoke('text').then((text) => text.trim());
    }

    increaseQuantity() {
        cy.get('.js-qty__adjust--plus').click().click();
    }

    getQuantityInput() {
        return cy.get('#Quantity-template--15822213775447__main7026099880023');
    }

    verifyitemsQuantityIncresed() {
        cy.get('#Quantity-template--15822213775447__main7026099880023').then(($el) => {
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

    addToCart() {
        cy.get('#AddToCart-').click();
    }
}

export default ProductPage;
