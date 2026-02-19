### TValidator {#api-validator class="mt-lg-5"}

The validator configuration option has properties as described below:

<div class="doc-api-reference mt-0">
<div class="doc-table-responsive doc-table-3cols">

| Property | Type      | Description |
|----------|-----------|-------------|
| validators | `Record<String, Boolean>` | External validator plugin validation result. |
| messages   | `Record<String, Boolean>` | Validation message for each validation types. |
| hasError   | `Boolean` | An indicator that tells the field value pass the validation or not. |
| dirty      | `Boolean` | Value comes from validator plugin that indicate the field is dirty or not. |

All properties are mandatory. 
</div>
</div>

::: info <BsIcon icon="info" /><span class="ms-2 h6 mb-0">NOTE</span>
**Vue MDBootstrap** does not include form validation by default, we leave that up 
to the 3rd party form validation plugin. As of now, [Vuelidate](https://vuelidate-next.netlify.app/) 
has been fully tested with our component library.
:::
