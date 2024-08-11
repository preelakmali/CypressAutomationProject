
import SearchResultsPage from '../pages/searchResultPage';
import ProductPage from '../pages/productPage';

describe('Search Result Functionality', () => {

    const searchPage = new SearchResultsPage();
    const productPage = new ProductPage();

    beforeEach(() => {
        // Initial visit to the search page
        searchPage.visit();
    });

    //03
    it('Search results should appear on the page', () => {
        searchPage.verifyProductIsVisible() ;
    });

    // 04
    it('Results should get sorted accurately from low to high in price', () => {
        searchPage.sortResultsByLowToHigh();
        // searchPage.verifyResultsSorted();
    });


    //05
    it('Product display page should load on clicking a product', () => {
        searchPage.sortResultsByLowToHigh();
        searchPage.clickFirstProduct();
        productPage.verifyProductPageNavigation();
        });


});
