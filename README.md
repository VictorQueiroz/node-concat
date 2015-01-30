# node-concat

Example:
```js
concat('a', 'b', 'c', 'd');
// result: a, b, c, d

// or: concat('a', 'b', 'c', 'd', '_');
// result: a_b_c_d

concat(obj1, obj2, obj3, arr);
// result: {"key": "value"}, {"key": "value"}, {"key": "value"}, [{"key": "value"}]
```