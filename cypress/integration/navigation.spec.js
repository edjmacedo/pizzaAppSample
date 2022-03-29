describe("Navigation", () => {
  it("Navigation to empty order cart", () => {
    cy.visit("http://localhost:3000/");
    cy.get('a[href*="cart"]').click();
    cy.url().should("include", "/cart");
    cy.get(".header").contains("You do not have any order in progress");
  });
  it("Navigate into a restaurant", () => {
    cy.visit("http://localhost:3000/");
    cy.get('a[href*="menu?id=1"]').click();
    cy.url().should("include", "/menu?id=1");
    cy.get(".header").contains("Pizzeria Apan");
  });
});
