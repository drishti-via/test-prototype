import { ConversionCategoryData } from './types'

export const conversionData: Record<string, ConversionCategoryData> = {
  length: {
    name: 'Length',
    icon: '📏',
    description: 'Convert between different units of length',
    units: {
      meters: { name: 'Meters', symbol: 'm', toBase: (v) => v, fromBase: (v) => v },
      kilometers: { name: 'Kilometers', symbol: 'km', toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
      centimeters: { name: 'Centimeters', symbol: 'cm', toBase: (v) => v / 100, fromBase: (v) => v * 100 },
      millimeters: { name: 'Millimeters', symbol: 'mm', toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
      miles: { name: 'Miles', symbol: 'mi', toBase: (v) => v * 1609.344, fromBase: (v) => v / 1609.344 },
      yards: { name: 'Yards', symbol: 'yd', toBase: (v) => v * 0.9144, fromBase: (v) => v / 0.9144 },
      feet: { name: 'Feet', symbol: 'ft', toBase: (v) => v * 0.3048, fromBase: (v) => v / 0.3048 },
      inches: { name: 'Inches', symbol: 'in', toBase: (v) => v * 0.0254, fromBase: (v) => v / 0.0254 },
    },
  },
  weight: {
    name: 'Weight',
    icon: '⚖️',
    description: 'Convert between different units of weight',
    units: {
      kilograms: { name: 'Kilograms', symbol: 'kg', toBase: (v) => v, fromBase: (v) => v },
      grams: { name: 'Grams', symbol: 'g', toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
      milligrams: { name: 'Milligrams', symbol: 'mg', toBase: (v) => v / 1000000, fromBase: (v) => v * 1000000 },
      pounds: { name: 'Pounds', symbol: 'lb', toBase: (v) => v * 0.453592, fromBase: (v) => v / 0.453592 },
      ounces: { name: 'Ounces', symbol: 'oz', toBase: (v) => v * 0.0283495, fromBase: (v) => v / 0.0283495 },
      tons: { name: 'Tons', symbol: 't', toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
    },
  },
  temperature: {
    name: 'Temperature',
    icon: '🌡️',
    description: 'Convert between temperature scales',
    units: {
      celsius: { 
        name: 'Celsius', 
        symbol: '°C', 
        toBase: (v) => v, 
        fromBase: (v) => v 
      },
      fahrenheit: { 
        name: 'Fahrenheit', 
        symbol: '°F', 
        toBase: (v) => (v - 32) * 5/9, 
        fromBase: (v) => (v * 9/5) + 32 
      },
      kelvin: { 
        name: 'Kelvin', 
        symbol: 'K', 
        toBase: (v) => v - 273.15, 
        fromBase: (v) => v + 273.15 
      },
    },
  },
  volume: {
    name: 'Volume',
    icon: '🧊',
    description: 'Convert between different units of volume',
    units: {
      liters: { name: 'Liters', symbol: 'L', toBase: (v) => v, fromBase: (v) => v },
      milliliters: { name: 'Milliliters', symbol: 'mL', toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
      gallons: { name: 'Gallons', symbol: 'gal', toBase: (v) => v * 3.78541, fromBase: (v) => v / 3.78541 },
      quarts: { name: 'Quarts', symbol: 'qt', toBase: (v) => v * 0.946353, fromBase: (v) => v / 0.946353 },
      pints: { name: 'Pints', symbol: 'pt', toBase: (v) => v * 0.473176, fromBase: (v) => v / 0.473176 },
      cups: { name: 'Cups', symbol: 'cup', toBase: (v) => v * 0.236588, fromBase: (v) => v / 0.236588 },
      cubicMeters: { name: 'Cubic Meters', symbol: 'm³', toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
      cubicCentimeters: { 
        name: 'Cubic Centimeters', 
        symbol: 'cm³', 
        toBase: (v) => v / 1000, 
        fromBase: (v) => v * 1000 
      },
    },
  },
  area: {
    name: 'Area',
    icon: '📐',
    description: 'Convert between different units of area',
    units: {
      squareMeters: { name: 'Square Meters', symbol: 'm²', toBase: (v) => v, fromBase: (v) => v },
      squareKilometers: { 
        name: 'Square Kilometers', 
        symbol: 'km²', 
        toBase: (v) => v * 1000000, 
        fromBase: (v) => v / 1000000 
      },
      squareFeet: { name: 'Square Feet', symbol: 'ft²', toBase: (v) => v * 0.092903, fromBase: (v) => v / 0.092903 },
      squareYards: { name: 'Square Yards', symbol: 'yd²', toBase: (v) => v * 0.836127, fromBase: (v) => v / 0.836127 },
      acres: { name: 'Acres', symbol: 'ac', toBase: (v) => v * 4046.86, fromBase: (v) => v / 4046.86 },
      hectares: { name: 'Hectares', symbol: 'ha', toBase: (v) => v * 10000, fromBase: (v) => v / 10000 },
    },
  },
  speed: {
    name: 'Speed',
    icon: '🚀',
    description: 'Convert between different units of speed',
    units: {
      metersPerSecond: { name: 'Meters/Second', symbol: 'm/s', toBase: (v) => v, fromBase: (v) => v },
      kilometersPerHour: { name: 'Kilometers/Hour', symbol: 'km/h', toBase: (v) => v / 3.6, fromBase: (v) => v * 3.6 },
      milesPerHour: { name: 'Miles/Hour', symbol: 'mph', toBase: (v) => v * 0.44704, fromBase: (v) => v / 0.44704 },
      feetPerSecond: { name: 'Feet/Second', symbol: 'ft/s', toBase: (v) => v * 0.3048, fromBase: (v) => v / 0.3048 },
      knots: { name: 'Knots', symbol: 'kn', toBase: (v) => v * 0.514444, fromBase: (v) => v / 0.514444 },
    },
  },
  time: {
    name: 'Time',
    icon: '⏱️',
    description: 'Convert between different units of time',
    units: {
      seconds: { name: 'Seconds', symbol: 's', toBase: (v) => v, fromBase: (v) => v },
      milliseconds: { name: 'Milliseconds', symbol: 'ms', toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
      minutes: { name: 'Minutes', symbol: 'min', toBase: (v) => v * 60, fromBase: (v) => v / 60 },
      hours: { name: 'Hours', symbol: 'h', toBase: (v) => v * 3600, fromBase: (v) => v / 3600 },
      days: { name: 'Days', symbol: 'd', toBase: (v) => v * 86400, fromBase: (v) => v / 86400 },
      weeks: { name: 'Weeks', symbol: 'wk', toBase: (v) => v * 604800, fromBase: (v) => v / 604800 },
      months: { name: 'Months', symbol: 'mo', toBase: (v) => v * 2629746, fromBase: (v) => v / 2629746 },
      years: { name: 'Years', symbol: 'yr', toBase: (v) => v * 31556952, fromBase: (v) => v / 31556952 },
    },
  },
  data: {
    name: 'Data',
    icon: '💾',
    description: 'Convert between different units of digital storage',
    units: {
      bytes: { name: 'Bytes', symbol: 'B', toBase: (v) => v, fromBase: (v) => v },
      kilobytes: { name: 'Kilobytes', symbol: 'KB', toBase: (v) => v * 1024, fromBase: (v) => v / 1024 },
      megabytes: { name: 'Megabytes', symbol: 'MB', toBase: (v) => v * 1048576, fromBase: (v) => v / 1048576 },
      gigabytes: { name: 'Gigabytes', symbol: 'GB', toBase: (v) => v * 1073741824, fromBase: (v) => v / 1073741824 },
      terabytes: { name: 'Terabytes', symbol: 'TB', toBase: (v) => v * 1099511627776, fromBase: (v) => v / 1099511627776 },
      petabytes: { 
        name: 'Petabytes', 
        symbol: 'PB', 
        toBase: (v) => v * 1125899906842624, 
        fromBase: (v) => v / 1125899906842624 
      },
    },
  },
}

export function convertValue(
  value: number,
  fromUnit: string,
  toUnit: string,
  category: string
): number {
  const categoryData = conversionData[category]
  if (!categoryData) return 0

  const fromUnitData = categoryData.units[fromUnit]
  const toUnitData = categoryData.units[toUnit]
  if (!fromUnitData || !toUnitData) return 0

  const baseValue = fromUnitData.toBase(value)
  const result = toUnitData.fromBase(baseValue)
  return result
}

export function formatResult(value: number): string {
  if (value === 0) return '0'
  if (!isFinite(value)) return 'Error'
  
  // Handle very large or very small numbers
  if (Math.abs(value) >= 1e10 || (Math.abs(value) < 1e-6 && value !== 0)) {
    return value.toExponential(4)
  }
  
  // Round to reasonable decimal places
  const result = Math.round(value * 1000000) / 1000000
  return result.toLocaleString(undefined, { maximumFractionDigits: 6 })
}