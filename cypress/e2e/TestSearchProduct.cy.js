     
     
     import ProductPage from '../pages/productPage';
     import CartPage from '../pages/cartPage';
     
     describe('Search Product and Cart Functionality', () => {

        const productPage = new ProductPage();
        const cartPage = new CartPage();
        let productPrice;

        beforeEach(() => {
            productPage.visit();
        });


     //06

        it('Number of items should increase when adjusted to 3', () => {

            productPage.getProductPrice().then((price) => {
                productPrice = parseFloat(price.replace(/[^0-9.-]/g, '')); // Convert to number
                cy.log('Product Price:', productPrice);
            });
    
            productPage.increaseQuantity();
            productPage.verifyitemsQuantityIncresed();
            
        });


        //07
        it('Cart slider pop-up should appear when Add to Cart is clicked', () => {

            productPage.addToCart();
            cartPage.verifyDrawerVisible();
        
        });

      // 08

        it('Validate the cart is showing correct product info', () => {

        productPage.getProductPrice().then((price) => {
            productPrice = parseFloat(price.replace(/[^0-9.-]/g, '')); // Convert to number
            cy.log('Product Price:', productPrice);
        });
        productPage.increaseQuantity();
        productPage.verifyitemsQuantityIncresed();
        productPage.addToCart();
        cartPage.verifyDrawerVisible();
        cartPage.verifyQuantity();
        cartPage.verifySubtotal(productPrice);
        cartPage.verifyRealTimeChatIconVisible();     
        });
    });