```javascript
// Incorrect usage of $inc operator in MongoDB update query
db.collection('myCollection').updateOne({fieldName: 'value'}, {$inc: {counter: '1'}});
```