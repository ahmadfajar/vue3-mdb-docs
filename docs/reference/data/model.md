---
description: A built-in data model class for working with entity object and remote API.
---

# BsModel

::: lead
A built-in data model class for working with entity object and remote API. 
:::


## Overview 

**Vue MDBootstrap** provides built-in data model class for working with entity object 
and remote API. **BsModel** represents an entity object that your application manages.
For example, one might define a model for Users, Products, Cars, or other real-world 
object that we want to model in the system. Models also can be used for binding data 
by most of the input control components.

### Usage Example {class="mb-4"}

```ts
import { BsModel } from "vue-mdbootstrap";

const user = new BsModel({
  uid: null,
  username: null,
  displayName: null,
  email: null,
  phoneNumber: null,
  enabled: true
});

// assign a field with spesific value
user.username = 'John Doe';

// assign all fields value
user.assignValues({
  uid: 123,
  username: 'john.doe',
  displayName: 'John Doe',
  email: 'john@example.com',
  phoneNumber: '061-430940',
  enabled: true
});

``` 

## Working with REST API

Sometimes we want to work with RESTful backend to load and save data. We can achieve
this by configuring the RestProxy when creating the Model instance.

```ts
import { BsModel } from "vue-mdbootstrap";

const user = new BsModel({
  schema: {
    uid: null,
    username: null,
    displayName: null,
    email: null,
    phoneNumber: null,
    enabled: true,
  },
  proxy: {
    // do not change text: `{id}`
    save: { url: './api/users', method: 'post' },
    update: { url: './api/users/{id}', method: 'patch' },
    delete: { url: './api/users/{id}', method: 'delete' },
    fetch: './api/users/{id}',
  }
}, null, 'uid');
```

### Loading Data 

Data can be load in the following ways:

```ts
user.fetch(123)
    .catch(function (error) {
      console.log(error);
    });
```

### Saving Data 

After assigned all fields value, data can be save as new record to the RESTful backend
in the following ways:

```ts
user.save()
    .catch(function (error) {
      console.log(error);
    });
```

And to perform update via RESTful backend can be done in the following ways:

```ts
user.update()
    .catch(function (error) {
      console.log(error);
    });
```

### CSRF Token 

If the RESTful backend needs CSRF token within the **POST**, **PATCH**, **PUT** 
or **DELETE** request, we can accomplish it with :

```ts
import { BsModel } from "vue-mdbootstrap";

const user = new BsModel({
  schema: {
    uid: null,
    username: null,
    displayName: null,
    email: null,
    phoneNumber: null,
    enabled: true,
  },
  proxy: {
    // do not change text: '{id}'
    save: { url: './api/users', method: 'post' },
    update: { url: './api/users/{id}', method: 'patch' },
    delete: { url: './api/users/{id}', method: 'delete' },
    fetch: './api/users/{id}',
  },
  csrfConfig: {
    // do not change text: '{name}'
    url: './api/token/{name}',
    // 'token_name' is a keyword to identify the token. 
    // This keyword is used by the RESTful backend to create the CSRF token.
    tokenName: 'token_name', 
    dataField: 'value',
    // If 'suffix' is 'true' then the keyword will become: 'token_name-create', 'token_name-update', 'token_name-delete'
    // when perfoming HTTP request to save, update or delete record.
    suffix: false,
  }
}, null, 'uid');
```

## Working with Virtual Fields

Sometimes RESTful backend delivers a nested object, but we want our Model represents
a simple object Model. We can solve this situation using virtual fields and combine them
with `onAfterFetch` event which is triggered after successfully loading or saving the 
object Model.

::: code-group 

```ts [ActivityModel.ts]
import { BsModel } from "vue-mdbootstrap";
import type { TModelOptions, TRecord } from 'vue-mdbootstrap';

export class ActivityModel extends BsModel{
  constructor() {
    const model: TModelOptions = {
      schema: {
        uid: null,
        code: null,
        status: null,
        title: null,
        periode: null,
        year: null,
      },
      proxy: {
        save: { url: './api/activity', method: 'post' },
        update: { url: './api/activity/{id}', method: 'patch' },
        delete: { url: './api/activity/{id}', method: 'delete' },
        fetch: './api/activity/{id}',
      }
    };

    super(model, null, 'uid');
    // below is the virtual fields
    this.set(this, 'budget', null);
    this.set(this, 'realisasi', null);
    this.set(this, 'programId', null);
    this.set(this, 'programName', null);
    this.set(this, 'batchId', null);
    this.set(this, 'batchName', null);
  }

  // automatically called when fetching from remote API
  onAfterFetch(data: TRecord): void {
    // assigns values to the virtual fields
    this.set(this, 'budget', data.budget);
    this.set(this, 'realisasi', data.realisasi);

    if (data.program) {
      this.set(this, 'programId', data.program.id);
      this.set(this, 'programName', data.program.title);
    }
    if (data.batch) {
      this.set(this, 'batchId', data.batch.id);
      this.set(this, 'batchName', data.batch.title);
    }
  }
};

```

```ts [OtherFile.ts]
import { ActivityModel } from "./ActivityModel";

const myModel = new ActivityModel();
myModel.fetch(123)
       .catch(function (error) {
          console.log(error);
       });

```
::: 

## Working with Nested Fields

There are use case when RESTful backend delivers a nested object and we want our
Models to keep track those nested objects. But when performing `save` or `update`, 
we want to ignore those nested objects and some unneeded fields.

::: code-group 

```ts [InventoryObat.ts] 
import { BsModel } from "vue-mdbootstrap";
import type { TModelOptions, TRecord } from 'vue-mdbootstrap';
import type { ISupplier } from './Supplier';

export class InventoryObat extends BsModel {
  constructor() {
    const model: TModelOptions = {
      schema: {
        id: null,
        supplier: null,   // nested object, ignore when performing save/update
        supplierId: null, // ignore when performing save/update
        tanggal: null,
        invNum: null,     // ignore when performing save/update
        kodeObat: null,
        namaObat: null,
        satuan: null,
        jenisObat: null,
        kadaluarsa: null,
        jumlahMasuk: null,
        hargaDasar: null,
        hargaObat: null,
        jatuhTempo: null,
        jumlahTerhutang: null, // ignore when performing save/update
        jumlahBayar: null,
        lunas: false,
        catatan: null,
        sisaStok: null,  // ignore when performing save/update
        createdAt: null, // ignore when performing save/update
      },
      proxy: {
        fetch: './inventory/obat/{id}',
        delete: './inventory/obat/{id}',
        save: { url: './inventory/obat/masuk', method: 'post' },
        update: { url: './inventory/obat/update/{id}', method: 'patch' },
      },
    };

    super(model, null, 'id', 'content');
  }

  onAfterFetch(data: TRecord): void {
    this.set('supplierId', (data.supplier as ISupplier)?.supplierId);
  }

  // this method is needed to convert our data to simple object
  // and automatically called when performing 'save' or 'update'
  toObject(): TRecord {
    return {
      id: this.get('id'),
      supplier: this.get('supplierId'),
      tanggal: this.get('tanggal'),
      kodeObat: this.get('kodeObat'),
      namaObat: this.get('namaObat'),
      satuan: this.get('satuan'),
      jenisObat: this.get('jenisObat'),
      kadaluarsa: this.get('kadaluarsa'),
      jumlahMasuk: this.get('jumlahMasuk'),
      hargaDasar: this.get('hargaDasar'),
      hargaObat: this.get('hargaObat'),
      jatuhTempo: this.get('jatuhTempo'),
      jumlahBayar: this.get('jumlahBayar'),
      lunas: this.get('lunas'),
      catatan: this.get('catatan'),
    };
  }
}

```

```ts [Supplier.ts] 
import { BsModel } from "vue-mdbootstrap";
import type { TModelOptions } from 'vue-mdbootstrap';

export class Supplier extends BsModel {
  constructor() {
    const schema: TModelOptions = {
      schema: {
        supplierId: null,
        companyName: null,
        officePhone: null,
        contactPerson: null,
        contactPhone: null,
        department: null,
      },
      proxy: {
        fetch: './inventory/suppliers/{id}',
        delete: './inventory/suppliers/{id}',
        save: { url: './inventory/suppliers', method: 'post' },
        update: { url: './inventory/suppliers/{id}', method: 'patch' },
      },
    };

    super(schema, adapter, 'supplierId', 'content');
  }
}

export declare interface ISupplier extends Supplier {
  supplierId?: string;
  companyName?: string;
  officePhone?: string;
  contactPerson?: string;
  contactPhone?: string;
  department?: string;
}

``` 
::: 


## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Method" url="#api-reference">
<div class="doc-api pt-3">
<ul>
<li><div class="h5">destroy</div>

```ts
class BsModel {
  destroy(): void;
}
``` 
Cleaning up resources and dispose each property before destroying this object.
</li>
<li><div class="h5">assignValue</div>

```ts
class BsModel {
  assignValue(field: string, newValue: unknown): void;
}
``` 
Assign new value to an existing field name. 

**Details**:
* `field`: The field name
* `newValue`: The new value

</li>
<li><div class="h5 mt-4">assignValues</div>

```ts
class BsModel {
  assignValues(sources: TRecord): void;
}
``` 
Assign new values to some existing fields. This method checked the schema definition 
when constructing the object, and only fields that exists on the schema will get 
assign new value. 

**Details**:
* `sources`: Object with format key-value pairs

</li>
<li><div class="h5 mt-4">delete</div>

```ts
class BsModel {
  delete(): Promise<AxiosResponse>;
}
``` 
Perform delete record that already exists on the remote service via REST API.

</li>
<li><div class="h5 mt-4">fetch</div>

```ts
class BsModel {
  fetch(id?: string | number): Promise<AxiosResponse>;
}
``` 
Perform fetch or read record from remote service via REST API. 

**Details**:
* `id`: The item ID

</li>
<li><div class="h5 mt-4">freeze</div>

```ts
class BsModel {
  freeze(): Readonly<BsModel>;
}
``` 
Freeze this data model instance, makes it readonly and prevents any modification.

</li>
<li><div class="h5 mt-4">get</div>

```ts
class BsModel {
  get(name: string): unknown;
}
``` 
Get a field value.

**Details**:
* `name`: The field name.

</li>
<li><div class="h5 mt-4">set</div>

```ts
class BsModel {
  set(name: string, value: unknown): void;
}
``` 
Define or sets a field with new value. If the field doesn't exist, then it will be 
appended. Throws `Error` if the data model is frozen.

**Details**:
* `name`: The field name.
* `value`: The field value.

</li>
<li><div class="h5 mt-4">getFields</div>

```ts
class BsModel {
  getFields(): IterableIterator<string>;
}
``` 
Returns all the field names.

</li>
<li><div class="h5 mt-4">request</div>

```ts
class BsModel {
  request(
    restKey: keyof TRestMethodOptions,
    method?: THttpMethod | null,
    params?: TRecord | null,
    data?: TRecord | null,
    successCb?: (response: AxiosResponse) => void,
    errorCb?: (error: AxiosError) => void
  ): Promise<AxiosResponse>;  
}
``` 
Perform custom HTTP request to the remote service via REST API.

**Details**:
* `restKey`: The key from `restUrl` property.
* `method`: Any valid HTTP method, likes: `get`, `post`, `delete`, `put`, `patch`. Default is `get`.
* `params`: Parameters to append when invoke rest request.
* `data`: Data to append when invoke rest request.
* `successCb`: Callback function to be called when the request is successful.
* `errorCb`: Callback function to be called when the request is failed.

</li>
<li><div class="h5 mt-4">reset</div>

```ts
class BsModel {
  reset(): void;
}
``` 
Reset all fields value to their default or original.

</li>
<li><div class="h5 mt-4">resetState</div>

```ts
class BsModel {
  resetState(): void;
}
``` 
Reset this model state back to their initial states, such as `loading`, etc.

</li>
<li><div class="h5 mt-4">save</div>

```ts
class BsModel {
  save(): Promise<AxiosResponse>;
}
``` 
Persist new record to the remote service via REST API.

</li>
<li><div class="h5 mt-4">seal</div>

```ts
class BsModel {
  seal(): BsModel;
}
``` 
Seal this data model instance, preventing new properties from being added to it 
and marking all existing properties as non-configurable. 

Values of present properties can still be changed as long as they are writable.

</li>
<li><div class="h5 mt-4">toObject</div>

```ts
class BsModel {
  toObject(): TRecord;
}
``` 
Convert field attributes that exists in the schema definition into a Javascript plain object.
The result of this method is used on REST method like: `save()` and `update()`.

This method can be overridden on inherited classes to produce the desired DTO.

</li>
<li><div class="h5 mt-4">update</div>

```ts
class BsModel {
  update(): Promise<AxiosResponse>;
}
``` 
Update and persist record that already exists on the remote service via REST API.

</li>
<li><div class="h5 mt-4">onAfterFetch</div>

```ts
class BsModel {
  onAfterFetch?(data: TRecord): void;
}
``` 
Event triggered after data was fetched from the remote service. This method can be 
overridden on inherited classes.

**Details**:
* `data`: The response data.

</li>
</ul>
</div>
  </BsTab>
  <BsTab label="Property" url="#api-reference">
<div class="doc-table-responsive doc-table-3cols">

| Name   | Type | Description |
|--------|---------------|-------------|
| state  | `Readonly<TModelState>` | Readonly reactive data Model state. |
| loading  | `Boolean` | Readonly data Model state, whether it is still loading data or not. |
| updating | `Boolean` | Readonly data Model state, whether it is still in the process of saving/updating data to the remote service or not. |
| deleting | `Boolean` | Readonly data Model state, whether it is still in the process of deleting data from the remote service or not. |
| hasError | `Boolean` | Readonly data Model state, whether there was an error when loading/saving/deleting data or not. |
| csrfConfig | `Readonly<TCSRFConfig>`/`undefined` | Returns the CSRF configuration. |
| proxy    | `IRestAdapter` | Returns REST proxy adapter which is used to work with remote service. |
| restUrl <Badge>Get/Set</Badge> | `TRestConfig`  | REST URL configuration. |
| idProperty | `String` | Returns the ID field name for this data model. |

</div>
  </BsTab>  
  <BsTab label="Constructor" url="#api-reference">
    <div class="pt-3 px-3 px-lg-0">

```ts
class BsModel {
  constructor(
    schema: TModelOptions | TRecord,
    adapter?: AxiosInstance | null,
    idProperty?: string,
    dataProperty?: string
  );
}

```  
**Details**:
-  `schema`: The data model schema.
-  `adapter`: Axios adapter instance. <BsBadge color="info">Optional</BsBadge>
-  `idProperty`: Data model ID field name, default is `id`. <BsBadge color="info">Optional</BsBadge>
-  `dataProperty`: REST response data property, default is `data`. <BsBadge color="info">Optional</BsBadge>

</div>
  </BsTab>
</BsTabs>


<script lang="ts" setup>
import { ref } from 'vue';

const tabs1active = ref(0);

</script> 
