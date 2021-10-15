describe("Form test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  const buyerInput = () => cy.get("#name-input");
  it("Can type into input", () => {
    buyerInput().type("Testing").should("have.value", "Testing");
  });
});
