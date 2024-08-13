
import HomePage from '../pages/homePage';
import ProductPage from '../pages/productPage';
import CartPage from '../pages/cartPage';
import SearchResultsPage from '../pages/searchResultPage';
import { URLs, TEXTS } from '../support/constants';



describe('FAO Schwarz Shopping Flow UI Test', () => {
  const homePage = new HomePage();
  const productPage = new ProductPage();
  const cartPage = new CartPage();
  const searchPage = new SearchResultsPage();


    it('should complete the shopping flow from search to cart validation', () => {

        // Step 1: Navigate to the site
        homePage.visit();
        // Assertion: Home Page should load properly
        homePage.verifyHomePageLoaded();
        //API verification 
        cy.request(URLs.HOME_PAGE).then((response) => {
          // Assert that the request was successful
          expect(response.status).to.eq(200);
        })
    

        // Step 2: Click on Search button
        homePage.verifySearchLayout();
        homePage.performSearch();
        // Assertion: Search layout should load
        homePage.verifySearchResults();

        // Step 3: Search for 'cars'
        // Assertion: Search results should appear on the page
        searchPage.verifyProductIsVisible() ;

        // Step 4: Sort by ‘low to high’ in price
        searchPage.sortResultsByLowToHigh();
        // Assertion: Results should be sorted accurately
        // searchPage.verifyResultsSorted();
    
 
        // Step 5: Click on any product
        searchPage.clickFirstProduct();
        // Assertion: Product display page should load
        productPage.verifyProductPageNavigation();


        // Step 6: Increase the number of items to 3
        productPage.getProductPrice().then((productPrice) => {
          cy.log('Retrieved Product Price:', productPrice);
        console.log('Retrieved Product Price:', productPrice);
        productPage.increaseQuantity();
        // Assertion: Should increase count
        productPage.verifyItemsQuantityIncreased();
        

        // Step 7: Click on Add to cart
        productPage.addToCart();
        // Assertion: Cart slider pop-up should appear
        cartPage.verifyDrawerVisible();


        // Step 8: Validate the cart is showing correct product info
        // Assertion: Added number of items should be correct  
        cartPage.verifyQuantity();  
        // Assertion: Real-time chat icon should be displayed on the popup
        cartPage.verifyRealTimeChatIconVisible(); 
        // Assertion: Subtotal should be updated accordingly
        // cartPage.verifySubtotal(productPrice);
          
      });
    });
  });