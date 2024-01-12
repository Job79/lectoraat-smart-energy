describe('smart-energy-web-e2e', () => {
  it('boiler calculation should be correct', () => {
    cy.visit('calculators/boiler');
    cy.get('input[name="liter"]').type('10');
    cy.get('input[name="pricePerKwh"]').type('10');
    cy.get('input[name="power"]').type('10');
    cy.get('select[name="energyLabel"]').select('A');

    cy.get('[result] .stat-value').eq(0).should('have.text', '€ 6.4');
    cy.get('[result] .stat-value').eq(1).should('have.text', '64 Uur');
    cy.get('[result] .stat-value').eq(2).should('have.text', '0.64 kWh');
    cy.get('[result] .stat-value').eq(3).should('have.text', '€ 167.9');
    cy.get('[result] .stat-value').eq(4).should('have.text', '0.46 kWh');
  });
});
