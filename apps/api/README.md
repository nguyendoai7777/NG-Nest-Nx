# Resource

> Api for ***product***: "localhost:3333"

| Description | Method | URL | Param| Request Body |
| ----------- | ------ | --- | ---- | ------------ |
|Get all pro duct|GET|<span style="color: #56A0DF">**/items/all**</span>| <span style="color: deeppink">null</span> | <span style="color: deeppink">null</span>|
|Get a product follow id|GET|<span style="color: #56A0DF">**/item/{id}**</span>|<span style="color: deeppink">null</span> | <span style="color: deeppink">null</span>|
|Delete a product follow id|DELETE|<span style="color: #56A0DF">**/item/{id}**</span>|<span style="color: deeppink">null</span> | <span style="color: deeppink">null</span>|
|Update a product follow id|PUT|<span style="color: #56A0DF">**/item/{id}**</span>|<span style="color: deeppink">null</span> | <pre style="color: white">{ <br>&nbsp;&nbsp;name: string, <br>&nbsp; desc: string, <br/>&nbsp;&nbsp;qty: number <br>}</span>|
|Create new product|POST|<span style="color: #56A0DF">**/item**</span>|<span style="color: deeppink">null</span> |  <pre style="color: white">{ <br>&nbsp;&nbsp;name: string, <br>&nbsp; desc: string, <br/>&nbsp;&nbsp;qty: number <br>}</span>|

