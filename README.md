# MongoDB $inc Operator Error: Incorrect Usage with String

This repository demonstrates a common error when using the `$inc` operator in MongoDB update queries.  The error arises from providing a string value instead of a numeric value to the `$inc` operator.

## Bug Description:
The `$inc` operator is designed to increment a numeric field by a specified amount.  If a string is provided, MongoDB will not perform the increment correctly, which can lead to unexpected results. This bug showcases this issue. 

## Bug Reproduction:
1. Clone this repository.
2. Start a MongoDB instance (or use MongoDB Atlas).
3. Run `bug.js` to observe the incorrect behavior. 
4. Run `bugSolution.js` to see the corrected version. 

## Solution:
The solution is to ensure that the value passed to `$inc` is a number, not a string. 

## Related Issues:
* Similar issues can occur with other MongoDB operators that require numeric inputs.