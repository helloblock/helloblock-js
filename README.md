### HelloBlock-js

Javascript Client Wrappers for the [HelloBlock API][API].

## Installation:

This module is published in NPM:

```bash
$ npm install helloblock-js --save
```

## API documentation

### Instantiating a Client


```js
var helloblock = require("../../lib/helloblock")({
  network: 'testnet',
  debug: true
})
```

This generates a new API client. It accepts an options argument which is used to configure the client.

##### options:

- `network` **string** Setting the target network (```mainnet```, ```testnet```)
- `version` **string** Pointing to particular API version (```v1```)
- `debug`   **string** Output debugging information to the console


This options argument can will be an object with the properties specified
above.


### helloblock client

The API calls are generally constructed as `resource` and `action`:

The second last argument is an optional `[options]` argument and the last argument is the callback.

- `err` error object if there is something wrong in the API call or if status code is above 400
- `response` response object contains the full body of the response, including all the required meta-data
```json
{
  "status": "success",
  "data": {
    "transactions": [
       {
        // transaction
       },
       {
        // transaction
       }
       // ...more transactions...
    ]
  }
}
```

- `resource` resource object contains only the actual data of the response
```json
[
   {
    // transaction
   },
   {
    // transaction
   }
   // ...more transactions...
]
```

```js
helloblock.resource.action('data', [options], function (err, response, resource) {
  if (err) {
    throw err;
  }

});
```

The following API resources are exposes in the module:

- [transactions](#helloblocktransactions)
  - [transactions.get](#helloblocktransactionsget)
  - [transactions.batchGet](#helloblocktransactions)
  - [transactions.latest](#helloblocktransactions)
  - [transactions.propagate](#helloblocktransactions)

### helloblock.transactions
#### helloblock.transactions.get

Get a transaction by its [txHash]('https://helloblock.io/docs/ref#transactions-single')

##### Arguments

- `txHash` **string**
- `callback` **function**

```js
helloblock.transactions.get('2542cd64e02d902975dc6e2e97797ceec5a84e8597c80d22a9e2dbd16e748738', function (err, resp, resource) {
  /*
    use the resource
  */
});
```


## Tests

All tests should be run with [npm](http://npmjs.org):

```bash
$ npm test
```


[API]: https://helloblock.io/docs/ref
