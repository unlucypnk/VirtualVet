/// <reference types = "Cypress" /> 

describe("Use credentials for UI login form", () => {
    it("Use valid email and password credentials for login", () => {
      cy.visit("http://localhost/3000/login");
      
    });

    it("Use invalid email format for the email input", () => {
      cy.visit("http://localhost/3000/login");
      
    });

    it("Use invalid password format for the password input", () => {
      cy.visit("http://localhost/3000/login");
      
    });

    it("Use empty email and password inputs", () => {
      cy.visit("http://localhost/3000/login");
      
    });
  });
  