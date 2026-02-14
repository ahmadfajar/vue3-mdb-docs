import { Color } from 'vue-mdbootstrap';

export declare type StringRecord = Record<string, string>;

export declare type TColor =
  | 'red'
  | 'deep-orange'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'light-green'
  | 'green'
  | 'teal'
  | 'cyan'
  | 'light-blue'
  | 'blue'
  | 'indigo'
  | 'deep-purple'
  | 'purple'
  | 'pink'
  | 'midnight-haze'
  | 'blue-grey'
  | 'gray'
  | 'neutral';

declare type ColorValue = {
  name: string;
  value: string;
};

export function useMaterialColorInfo(color: object): [ColorValue, ColorValue] {
  const keys = Object.keys(color) as [string, string];
  const values = Object.values(color) as [string, string];

  return [
    {
      name: keys[0],
      value: values[0],
    },
    {
      name: keys[1],
      value: values[1],
    },
  ];
}

export function textCssFromOklchColor(value: string) {
  const yiq = Color.oklchFromString(value);

  return Color.lightnessLevel(yiq) > 74 ? 'text-dark' : 'text-light';
}
