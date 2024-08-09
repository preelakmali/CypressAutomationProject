
class CartPage {
    verifyDrawerVisible() {
        cy.get('#CartDrawer')
            .should('be.visible')
            .and('have.class', 'drawer--is-open');
    }

    verifySubtotal(expectedSubtotal) {
        cy.get('.a_pplr_item_line_price')
            .invoke('text')
            .then((subtotalText) => {
                const cleanedText = subtotalText.replace(/[^0-9.-]/g, ''); // Remove non-numeric characters
                const numericValue = parseFloat(cleanedText); // Convert to number
                cy.log('Numeric Value:', numericValue);
                expect(numericValue).to.equal(expectedSubtotal);
            });
    }

    verifyQuantity() {
        cy.get('#cart_updates_40611284844631\\:5983943c0414e578282b65807b24f18b')
            .invoke('val')
            .then((value) => {
                expect(value).to.equal('3');
            });
    }

    verifyRealTimeChatIconVisible() {
        cy.get('#addToCart-btn').should('be.visible');
    }
}

export default CartPage;
