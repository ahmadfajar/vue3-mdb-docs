---
description: Static utility helper class for commonly used functions.
---

# Helper Class

::: lead
Static utility helper class for commonly used functions. 
:::


**Example** 

```ts
import { Helper } from 'vue-mdbootstrap';

let str: string;
for (let idx=0; idx < 10; idx++) {
  str = `index-${idx}`;  
}

// check whether str is empty or not
const result = Helper.isEmpty(str);
```

<div class="doc-api">

## createRange

```ts
class Helper {
  static createRange(length: number): number[]; 
}
``` 

Creates range of number. Returns array of numbers. 

**Details**:
* `length`: Range length

## defer

```ts
class Helper {
  static defer(callback: CallableFunction, delay: number, ...args: unknown[]): number;
}
``` 

Defer or delay execution of a function and returns `timeoutID`. The returned 
`timeoutID` is a positive integer value which identifies the timer created by 
the call to `setTimeout()`. This value can be passed to 
[clearTimeout](https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout)
to cancel the timeout. 

**Details**:
* `callback`: The function to execute
* `delay`: Number of delay in miliseconds (ms)
* `args`: Optional arguments which are passed through the `callback`

## getNestedValue

```ts
class Helper {
  static getNestedValue(obj: unknown, path: string[], fallbackFn?: CallableFunction): CallableFunction | never | unknown;
}
``` 

Get a value from an Object property. Returns the object property value. 

**Details**:
* `obj`: The object to check
* `path`: Array of field name
* `fallbackFn`: The fallback function

## getObjectValueByPath

```ts
class Helper {
  static getObjectValueByPath(obj: unknown, path: string, fallbackFn?: CallableFunction): unknown;
}
``` 

Get a value from an Object property. Returns the object property value. 

**Details**:
* `obj`: The object to evaluate
* `path`: The property name
* `fallbackFn`: The fallback function

## isEmpty

```ts
class Helper {
  static isEmpty(value: unknown, allowEmptyString?: boolean): boolean;
}
``` 

Check a value is empty or not. Returns `true` if value is empty otherwise `false`. 

**Details**:
* `value`: The value to evaluate
* `allowEmptyString`: Allow empty string or not

## isEmptyObject

```ts
class Helper {
  static isEmptyObject(value: unknown): boolean;
}
``` 

Check a value is an empty object or not. Returns `true` if value is empty otherwise `false`.

**Details**:
* `value`: The value to evaluate

## isArray

```ts
class Helper {
  static isArray(value: unknown): boolean;
}
``` 

Check the type of value is `Array` or not. `null` value is considered as not an `Array`. 
Returns `true` if the given value is an `Array` otherwise `false`.

**Details**:
* `value`: The value to evaluate

## isFunction

```ts
class Helper {
  static isFunction(value: unknown): boolean;
}
``` 

Check the type of value is Function or not. `null` or `undefined` is considered as 
not a Function. Returns `true` if the given value is a Function otherwise `false`.

**Details**:
* `value`: The value to evaluate

## isNumber

```ts
class Helper {
  static isNumber(value: unknown): boolean;
}
``` 

Check the type of value is a `number` or not. Returns `true` if the given 
value is a Number otherwise `false`.

**Details**:
* `value`: The value to evaluate

## isObject

```ts
class Helper {
  static isObject(value: unknown): boolean;
}
``` 

Check the type of value is `object` or not. `null` value is considered as not an 
`object`. Returns `true` if the given value is an `object` otherwise `false`. 

**Details**:
* `value`: The value to evaluate

## isPrimitive

```ts
class Helper {
  static isPrimitive(value: unknown): boolean;
}
``` 

Check the type of value is a primitive type or not. Returns `true` if the given 
value is a primitive type otherwise `false`.

**Details**:
* `value`: The value to evaluate

## isString

```ts
class Helper {
  static isString(value: unknown): boolean;
}
``` 

Check the type of value is a `string` or not. Returns `true` if the given 
value is a `string` otherwise `false`.

**Details**:
* `value`: The value to evaluate

## roundNumber

```ts
class Helper {
  static roundNumber(value: number, fractionDigit: number): number;
}
``` 

Round floating point value to the nearest decimal. Returns the rounded value. 

**Details**:
* `value`: The floating point value to be rounded
* `fractionDigit`: Maximum fraction/decimal digit

## parseFloatLoose

```ts
class Helper {
  static parseFloatLoose(value: string): number | undefined;
}
``` 

Loosely converts a string to a floating-point number. Returns a floating-point 
number if the input string can be converted otherwise `undefined`.

**Details**:
* `value`: The input string to convert

## parseIntLoose

```ts
class Helper {
  static parseIntLoose(value: string): number | undefined;
}
``` 

Loosely converts a string to an integer. Returns an integer if the input string 
can be converted otherwise `undefined`.

**Details**:
* `value`: The input string to convert

## cssUnit

```ts
class Helper {
  static cssUnit(value: string | number | undefined | null, unit?: string | undefined | null): string | undefined;
}
``` 

Converts `number` or `string` to any valid html css unit size. Returns Css inline dimension. 

**Details**:
* `value`: The value to convert
* `unit`: The css unit dimension to add as suffix, default `px`.

## sortArrayObj

```ts
class Helper {
  static sortArrayObj(items: Array<object>, key: string, isDescending?: boolean): object[];
}
``` 

Sort an array of object. Returns the sorted array. 

**Details**:
* `items`: Array of object to be sorted
* `key`: Field name or key to sort.
* `isDescending`: Sort descending or ascending.

## uuid

```ts
class Helper {
  static uuid(standard?: boolean): string;
}
``` 

Generate simple/random UUID or standard UUID v4. Returns UUID v4 or random UUID. 

**Details**:
* `standard`: If `true` then generate standard UUID v4 otherwise generate random UUID

</div>