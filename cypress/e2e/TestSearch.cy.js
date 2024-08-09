import HomePage from '../pages/homePage';


describe('Search Functionality', () => {
    
    const homePage = new HomePage();
   
    beforeEach(() => {
        // Initial visit to the search page
        homePage.visit();
    });

    //01
    it('Home Page should load properly', () => {
        homePage.verifyHomePageLoaded();
    });

    //02
    it('Search layout should load and perform search', () => {
        // Ensure the search layout is visible
        homePage.verifySearchLayout();
        homePage.performSearch();
        homePage.verifySearchResults();
    });


    });