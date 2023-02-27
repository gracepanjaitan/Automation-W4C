import {
  LOGIN_VALID,
  LOGIN_INVALID,
  UNACTIVE_USER,
  BLANK_PASSWORD,
} from "../../../fixtures/userSeller";

describe("Login", () => {
  it("Login Seller [Valid]", () => {
    cy.request({
      method: "POST",
      url: `${Cypress.env("baseUrl")}${Cypress.env("loginUrl")}`,
      headers: {
        "Content-Type": "application/json",
      },
      body: LOGIN_VALID,
    });
  });

  it("Login Seller [Invalid]", () => {
    cy.request({
      method: "POST",
      failOnStatusCode: false,
      url: `${Cypress.env("baseUrl")}${Cypress.env("loginUrl")}`,
      headers: {
        "Content-Type": "application/json",
      },
      body: LOGIN_INVALID,
    }).then((response) => {
      expect(response.status).to.equal(400);
      cy.log(JSON.stringify(response.body));
    });
  });

  it("Login Seller [Invalid-UnRegistered User]", () => {
    cy.request({
      method: "POST",
      failOnStatusCode: false,
      url: `${Cypress.env("baseUrl")}${Cypress.env("loginUrl")}`,
      headers: {
        "Content-Type": "application/json",
      },
      body: UNACTIVE_USER,
    }).then((response) => {
      expect(response.status).to.equal(400);
      cy.log(JSON.stringify(response.body));
    });
  });

  it("Login Seller [Invalid-Blank Password]", () => {
    cy.request({
      method: "POST",
      failOnStatusCode: false,
      url: `${Cypress.env("baseUrl")}${Cypress.env("loginUrl")}`,
      headers: {
        "Content-Type": "application/json",
      },
      body: BLANK_PASSWORD,
    }).then((response) => {
      expect(response.status).to.equal(422);
      cy.log(JSON.stringify(response.body));
    });
  });
});
