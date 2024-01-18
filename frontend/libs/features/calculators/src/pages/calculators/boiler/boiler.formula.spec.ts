import { BoilerFormula, IBoilerParameters } from './boiler.formula';

describe('BoilerFormula', () => {
  let boilerFormula: BoilerFormula;

  beforeEach(() => {
    const params: IBoilerParameters = {
      pricePerKwh: 0.1,
      capacity: 100,
      power: 2000,
      energyLabel: 'A+',
    };
    boilerFormula = new BoilerFormula(params);
  });

  it('should calculate cost of heating once', () => {
    expect(boilerFormula.costHeatingOnce).toEqual(0.64);
  });

  it('should calculate time required for heating', () => {
    expect(boilerFormula.timeRequiredForHeating).toEqual(3.2);
  });

  it('should calculate energy required for heating', () => {
    expect(boilerFormula.energyRequiredForHeating).toEqual(6.4);
  });

  it('should calculate costs of energy loss per year', () => {
    expect(boilerFormula.costsEnergyLossPerYear).toEqual(222.65);
  });

  it('should calculate energy loss per day', () => {
    expect(boilerFormula.energyLossPerDay).toEqual(0.61);
  });
});
