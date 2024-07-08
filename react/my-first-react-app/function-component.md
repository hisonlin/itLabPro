## you can use js variable/ express directly
- render a variable
  `let name="Hison"`
  `<h1>Hello {name}</h1>`

- styling store in a variable
  `const myStyle = {
    color: 'red',
    fontSize: '20px'
  }`
  `<h1 style={myStyle}>Hello {name}</h1>`

- use expression
  `<p style={{color:name==='Hison'?'red':'yellow'}}>My first app</p>`

## Function based Component
1. Function Component
- Naming:
- use PascalCase (start with capital letter)

2. Return
- Must be a single tag
- Use Fragment to return multiple tags(<> </>)(React.Fragment)
  - do not create a node in the DOM
  
## Create a component
- Create a new file with the name of the component
- Create a function with the same name as the file
- Export the function
- Import the component in the parent file
`const MyComponent = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}
export default MyComponent;`

## State
- regular variable changes do not re-render the component
- must use state to re-render the component
1. Set up a state
`const [count,setCount] = useState(0);`
2. Update the state
`setCount((count)=>{count+1});` or
`setCount(count+1);`
 this is an async function
3. Use the state
`<h1>{count}</h1>`

## Homework
1.Rewrite portfolio with several components
2. Create a Time component
  1. Initial value is current time
  2. A button, when clicked, the time is changed as latest time
  3. Consume the component in App.