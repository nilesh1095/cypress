///<reference types="Cypress" />
describe('Basic commands in cypress' , ()=>{
    beforeEach(()=>{
        cy.visit('https://www.forbes.com/wheels/');
    });

    it('visit wheels homepage',()=>{
        // cy.visit('https://www.forbes.com/wheels/');
        cy.location('protocol').should('eq','https:')
        cy.title().should('eq','Forbes Wheels: Car Shopping Simplified');
    });

    it('Scroll to bottom and click on More Articles',()=>{
        // cy.visit('https://www.forbes.com/wheels/');
        cy.get('.more-articles').contains('More Articles').scrollIntoView({duration:3000}).click();
        cy.get('li.stream-article').its('length').should('eq',7)
        cy.reload();
    });

    it('Click Latest review section post' , ()=>{
        // cy.visit('https://www.forbes.com/wheels/');
        cy.get('.latest-review-wrapper').within(($e)=>{
            cy.get('.post-item').first().click();
            cy.url().should('include','cars/hyundai/sonata/');
        });
        cy.get('.car-name').should('contain.text','2021 Hyundai Sonata: Design Meets Value')
        cy.go('back');
    });

    it('make header non sticky',()=>{
        // cy.visit('https://www.forbes.com/wheels/');
        cy.get('.header-wrap').then(($element) => {
            $element[0].setAttribute('style', 'position: relative;');
        });
        cy.get('#root-app').then(($element) => {
            $element[0].setAttribute('style', 'margin-top: 0;');
        });
        cy.get('.more-articles').contains('More Articles').scrollIntoView({duration:3000})
        cy.contains('.more-articles').should('have.html','h1');
    });

    it('Test Research car section',()=>{
        cy.get('.dropdown-wrapper:not(:last-child)').each(($e)=>{
            cy.wrap($e).click();
            cy.wait(100)
            cy.get('.item').first().click();
        });
        cy.get('.button-wrap').should('have.attr','href','https://www.forbes.com/wheels/cars/acura/tlx/');
        cy.get('.search-button').click();
    })
})