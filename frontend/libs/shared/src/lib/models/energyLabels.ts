export const EnergyLabels = {
  'A+': (liter: number) => 5.5 + 3.16 * Math.pow(liter, 0.4),
  A: (liter: number) => 8.5 + 4.25 * Math.pow(liter, 0.4),
  B: (liter: number) => 12 + 5.93 * Math.pow(liter, 0.4),
  C: (liter: number) => 16.66 + 8.33 * Math.pow(liter, 0.4),
  D: (liter: number) => 21 + 10.33 * Math.pow(liter, 0.4),
  E: (liter: number) => 26 + 13.66 * Math.pow(liter, 0.4),
  F: (liter: number) => 31 + 16.66 * Math.pow(liter, 0.4),
  G: (liter: number) => 31 + 16.66 * Math.pow(liter, 0.4),
};

export type EnergyLabel = keyof typeof EnergyLabels;

//export const EnergyLabels = {
//  'A+': { calculate: (liter: number) => 5.5 + 3.16 * Math.pow(liter, 0.4), color: 'green' },
//  'A': { calculate: (liter: number) => 8.5 + 4.25 * Math.pow(liter, 0.4), color: 'yellow' },
//  'B': { calculate: (liter: number) => 12 + 5.93 * Math.pow(liter, 0.4), color: 'orange' },
//  'C': { calculate: (liter: number) => 16.66 + 8.33 * Math.pow(liter, 0.4), color: 'red' },
//  'D': { calculate: (liter: number) => 21 + 10.33 * Math.pow(liter, 0.4), color: 'purple' },
//  'E': { calculate: (liter: number) => 26 + 13.66 * Math.pow(liter, 0.4), color: 'blue' },
//  'F': { calculate: (liter: number) => 31 + 16.66 * Math.pow(liter, 0.4), color: 'indigo' },
//  'G': { calculate: (liter: number) => 31 + 16.66 * Math.pow(liter, 0.4), color: 'violet' },
//};



