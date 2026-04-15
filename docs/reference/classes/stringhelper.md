---
description: Static utility helper class for working with strings.
---

# StringHelper Class

::: lead
Static utility helper class for working with strings.
:::

<SmallNote color="teal">Since v2.0.0</SmallNote>

**Example**

```ts
import { StringHelper } from 'vue-mdbootstrap';

const str = 'hello, GOOD morning';
const result = StringHelper.titleCase(str);
// result: Hello, Good Morning
```

<div class="doc-api">

## isContains 

```ts
class StringHelper {
  static isContains(source?: string, searches?: string[]): boolean;
}
``` 

<SmallNote color="teal">Added in v2.2.0</SmallNote>

Determines whether an input string contains with any of the specified string or not. Returns 
`true` if any of the given strings in the collection is found at any position of the input string, 
otherwise `false`. 

**Details**:
* `source`: The input string to evaluate.
* `searches`: Collection of string to be searched.

## isEndWith 

```ts
class StringHelper {
  static isEndWith(source?: string, searches?: string[]): boolean;
}
``` 

Determines whether an input string ends with any of the specified string or not. Returns 
`true` if any of the given strings in the collection is found at the end of the input string, 
otherwise `false`. 

**Details**:
* `source`: The input string to evaluate.
* `searches`: Collection of string to be searched at the end of the input string.

## isStartWith 

```ts
class StringHelper {
  static isStartWith(source?: string, searches?: string[]): boolean;
}
``` 

<SmallNote color="teal">Added in v2.2.0</SmallNote>

Determines whether an input string starts with any of the specified string or not. Returns 
`true` if any of the given strings in the collection is found at the starts of the input string, 
otherwise `false`. 

**Details**:
* `source`: The input string to evaluate.
* `searches`: Collection of string to be searched at the start of the input string.

## titleCase 

```ts
class StringHelper {
  static titleCase(text?: string): string;
}
``` 

Simple function to transform the input string into *Title Case*. Returns new `string` 
that has been transform to *Title Case*. 

**Details**:
* `text`: The input string to transform

## camelCase 

```ts
class StringHelper {
  static camelCase(text?: string): string;
}
``` 

Simple function to transform the input string into 
[camelCase](https://en.wikipedia.org/wiki/Letter_case#Camel_case). Returns new `string` that 
has been transform to *camelCase*. 

**Details**:
* `text`: The input string to transform

## kebabCase 

```ts
class StringHelper {
  static kebabCase(text?: string): string;
}
``` 

Simple function to transform the input string into 
[kebab-case](https://en.wikipedia.org/wiki/Letter_case#Kebab_case). 
Returns new `string` that has been transform to *kebab-case*.

**Details**:
* `text`: The input string to transform

## padLeft 

```ts
class StringHelper {
  static padLeft(str: string | number, maxLength?: number, fillString?: string): string;
}
``` 

Pads the input string with a given string (possibly repeated) so that the resulting 
string reaches a given length. The padding is applied from the start (left) of the 
input string. Returns new `string` that has been padded on the left side. 

**Details**:
* `str`: The string to pad.
* `maxLength`: The length of the resulting string once the current string has been 
  padded. If this parameter is smaller than the current string's length, the current 
  string will be returned as it is.
* `fillString`: The string to pad the current string with. If this string is too 
  long, it will be truncated and the left-most part will be applied. The default 
  value for this parameter is " " (U+0020).

## padRight 

```ts
class StringHelper {
  static padRight(str: string | number, maxLength?: number, fillString?: string): string;
}
``` 

Pads the input string with a given string (possibly repeated) so that the resulting 
string reaches a given length. The padding is applied from the end (right) of the 
input string. Returns new `string` that has been padded on the right side. 

**Details**:
* `str`: The string to pad.
* `maxLength`: The length of the resulting string once the current string has been 
  padded. If this parameter is smaller than the current string's length, the current 
  string will be returned as it is.
* `fillString`: The string to pad the current string with. If this string is too 
  long, it will be truncated and the left-most part will be applied. The default 
  value for this parameter is " " (U+0020).


## chunk 

```ts
class StringHelper {
  static chunk(source: string, size?: number): string[];
}
``` 

Create an array of chunked strings. Returns array of chunked strings. 

**Details**:
* `source`: The input string to be processed.
* `size`: The number of characters within a chunk.

## encodeSpecialChars 

```ts
class StringHelper {
  static encodeSpecialChars(source: string, excludeDblQuote?: boolean, chars?: string[], replaces?: string[]): string;
}
``` 

Replace special characters from the given `source` with encoded chars. 

Double quote will always be encoded to html entity unless `excludeDblQuote` is 
set to `true`. 

**Details**:
* `source`: The input string to encode.
* `excludeDblQuote`: Optional, don't convert double quote to html entity.
* `chars`: Optional, special characters to encode.
* `replaces`: Optional, the encoded characters or replacement characters for the given `chars`.

</div>
