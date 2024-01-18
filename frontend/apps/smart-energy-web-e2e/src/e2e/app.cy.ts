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

    cy.get('#clear').click();

    cy.get('input[name="liter"]').type('70');
    cy.get('input[name="pricePerKwh"]').type('0.33');
    cy.get('input[name="power"]').type('210');
    cy.get('select[name="energyLabel"]').select('B');

    cy.get('[result] .stat-value').eq(0).should('have.text', '€ 1.48');
    cy.get('[result] .stat-value').eq(1).should('have.text', '21.33 Uur');
    cy.get('[result] .stat-value').eq(2).should('have.text', '4.48 kWh');
    cy.get('[result] .stat-value').eq(3).should('have.text', '€ 390.55');
    cy.get('[result] .stat-value').eq(4).should('have.text', '1.07 kWh');
  });

  it('enkel-dubbel tarief calculation should be correct', () => {
    cy.visit('calculators/single-double-rate');

    cy.get('input[name="normalElectricityUsage"]').type('10');
    cy.get('input[name="offPeakElectricityUsage"]').type('10');
    cy.get('input[name="normalPricePerKwh"]').type('10');
    cy.get('input[name="singleRatePricePerKwh"]').type('12');
    cy.get('input[name="normalReturnElectricity"]').type('10');
    cy.get('input[name="offPeakReturnElectricity"]').type('8');
    cy.get('input[name="offPeakPricePerKwh"]').type('10');

    cy.get('[result] .stat-value').eq(0).should('have.text', '€ 24');
    cy.get('[result] .stat-value').eq(1).should('have.text', '€ 20');

    cy.get('#clear').click();

    cy.get('input[name="normalElectricityUsage"]').type('10');
    cy.get('input[name="offPeakElectricityUsage"]').type('10');
    cy.get('input[name="normalPricePerKwh"]').type('10');
    cy.get('input[name="singleRatePricePerKwh"]').type('5');
    cy.get('input[name="normalReturnElectricity"]').type('10');
    cy.get('input[name="offPeakReturnElectricity"]').type('2');
    cy.get('input[name="offPeakPricePerKwh"]').type('10');

    cy.get('[result] .stat-value').eq(0).should('have.text', '€ 40');
    cy.get('[result] .stat-value').eq(1).should('have.text', '€ 80');
  });
});
