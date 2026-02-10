export type ConversionCategory = 
  | 'length'
  | 'weight'
  | 'temperature'
  | 'volume'
  | 'area'
  | 'speed'
  | 'time'
  | 'data'

export interface ConversionUnit {
  name: string
  symbol: string
  toBase: (value: number) => number
  fromBase: (value: number) => number
}

export interface ConversionCategoryData {
  name: string
  icon: string
  description: string
  units: Record<string, ConversionUnit>
}