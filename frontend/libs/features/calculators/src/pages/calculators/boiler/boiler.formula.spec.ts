import { BoilerFormula, IBoilerParameters, EnergyLabels } from './boiler.formula';

describe('BoilerFormula', () => {
    let boilerFormula: BoilerFormula;

    beforeEach(() => {
        const params: IBoilerParameters = {
            pricePerKwh: 0.1,
            capacity: 100,
            power: 2000,
            energyLabel: 'A+'
        };
        boilerFormula = new BoilerFormula(params);
    });

    it('should calculate cost of heating once', () => {
        expect(boilerFormula.costHeatingOnce).toBeCloseTo(0.64, 2);
    });

    it('should calculate time required for heating', () => {
        expect(boilerFormula.timeRequiredForHeating).toBeCloseTo(3.2, 2);
    });

    it('should calculate energy required for heating', () => {
        expect(boilerFormula.energyRequiredForHeating).toBeCloseTo(6.4, 2);
    });

    it('should calculate costs of energy loss per year', () => {
        expect(boilerFormula.costsEnergyLossPerYear).toBeCloseTo(222.65, 2);
    });

    it('should calculate energy loss per day', () => {
        expect(boilerFormula.energyLossPerDay).toBeCloseTo(0.61, 2);
    });
});