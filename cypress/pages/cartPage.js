

class CartPage {
    // Define locators as private properties
    #locators = {
        CART_DRAWER: '#CartDrawer',
        SUBTOTAL: 'div[data-subtotal]',
        QUANTITY_INPUT: '.js-qty__num',
        REALTIME_CHAT_ICON: '#addToCart-btn',
        COOKIE_BANNER: '#onetrust-banner-sdk',
    };

    // Method to verify that the cart drawer is visible
    verifyDrawerVisible() {
        cy.get(this.#locators.CART_DRAWER)
            .should('be.visible')
            .and('have.class', 'drawer--is-open');
    }

    // Method to verify the subtotal matches the expected value
    verifySubtotal(productValue) {
        cy.get(this.#locators.SUBTOTAL)
            .invoke('text')
            .then((subtotalText) => {
                // Log the raw text to verify what is being retrieved
                cy.log('Raw Subtotal Text:', subtotalText);
                console.log('Raw Subtotal Text:', subtotalText);

                // Clean the text to remove non-numeric characters except the dot
                const cleanedText = subtotalText.replace(/[^0-9.]/g, '');
                // Log the cleaned text
                cy.log('Cleaned Text:', cleanedText);
                console.log('Cleaned Text:', cleanedText);

                // Convert to a floating-point number and round down to an integer
                const numericValue = Math.floor(parseFloat(cleanedText));
                // Log the numeric value
                cy.log('Numeric Value:', numericValue);
                console.log('Numeric Value:', numericValue);

                // Ensure that productValue is defined and a number
                if (isNaN(productValue)) {
                    throw new Error('productValue is not a number');
                }

                // Validate that numericValue equals productValue multiplied by 3
                console.log('productValue Value2 :', productValue);
                const expectedValue = Math.floor(productValue * 3);
                cy.log('Expected Value:', expectedValue);
                console.log('Expected Value:', expectedValue);

                // Assert that the numericValue matches the expected value
                expect(numericValue).to.equal(expectedValue);
            });
    }

    // Method to verify the quantity of items in the cart
    verifyQuantity() {
        cy.get(this.#locators.QUANTITY_INPUT)
            .invoke('val')
            .then((value) => {
                expect(value).to.equal('3');
            });
    }

    // Method to verify the real-time chat icon is visible
    verifyRealTimeChatIconVisible() {
        // Hide the cookie banner
        cy.get(this.#locators.COOKIE_BANNER).invoke('css', 'display', 'none');
        cy.get(this.#locators.REALTIME_CHAT_ICON).should('be.visible');
    }
}

export default CartPage;
