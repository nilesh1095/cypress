///<reference types="Cypress" />

describe('Visual testing for lame application', () => {
    it('Visual Testing - Full page',()=>{
      cy.visit('http://127.0.0.1:5500/index.html');
      cy.matchImageSnapshot('full-page');
    });

    it('Visual Testing - Circle', () => {
      cy.visit('http://127.0.0.1:5500/index.html');
      cy.get('.circle').matchImageSnapshot('circle');
    });

    it('Visual Testing - Box', () => {
      cy.visit('http://127.0.0.1:5500/index.html');
      cy.get('.box').matchImageSnapshot('box');
    });
  });