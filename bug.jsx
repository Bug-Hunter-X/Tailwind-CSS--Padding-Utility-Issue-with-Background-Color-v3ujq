```javascript
// myComponent.jsx
<div className="bg-gray-200 p-4">
  <h1 className="text-2xl font-bold">My Component</h1>
  <p className="text-gray-700">This is some text.</p>
</div>
```
The above code produces a unexpected layout because Tailwind's `p-4` utility class doesn't apply correctly.
The problem is that the `p-4` utility only adds padding to the top, right, bottom and left of the element.
This happens only when the element has a `bg` class applied to it.