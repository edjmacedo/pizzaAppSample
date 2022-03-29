describe("Order", () => {
  it("Add Items to the cart", () => {
    cy.visit("http://localhost:3000/");
    cy.get('a[href*="menu?id=1"]').click();
    cy.url().should("include", "/menu?id=1");
    cy.get(".ui > input").first().type(2);
    cy.get("p > b").contains("Total:");
  });
  it("Send Order", () => {
    cy.visit("http://localhost:3000/");
    cy.get('a[href*="menu?id=1"]').click();
    cy.url().should("include", "/menu?id=1");
    cy.get(".ui > input").first().type(2);
    cy.get("p > b").contains("Total:");
    cy.get("button").contains("Order").click();
    cy.get("a > span").contains("See more Details on your orders").click();
    cy.get("p > b").contains("Status:");
  });
});
