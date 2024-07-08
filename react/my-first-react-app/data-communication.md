## Parent to child:
- parent component:
  <Counter numberFromParent={appNumber}/>
  
- child component:
  - use props as input parameter of the function
    then use props.name in UI
    
or - use destructure as input parameter
- child to parent:
- in parent:
  - set a local state to store the date from child
  - construct a function to be passed to child
  - pass the function as a prop to child
in child:
    - use the function in props to pass data to parent
    - call the function: nameFunction(dataPassed)
    
- sibling to sibling data transfer
 - data from one child to parent
 - data from parent to another child

## How virtual DOM is rendered
Only render the necessary component where the state changes
1. when parent change, rerender everything inside
2. when child change, rerender child only

## React component lifecycle
- lifecycle intro
  https://legacy.reactjs.org/docs/state-and-lifecycle.html
  
1. Initialization / Mounting
2. Updating
3. Unmounting

## useEffect
useEffect is a hook to manage component lifecycle
callback function is used to realize side effect:
useEffect(()=> {
funFromParent(counterNumber)
}, [])

side effects:
1. timer(setInterval, setTimeout) - cleanup
2. add event listener - cleanup
3. fetch data
4. updating DOM
5. set/get value from your localStorage

## homework
1. practice pass data between siblings
   1. set up a data in weather
   2. pass it to counter
2. realize calculator
  - sibling component: input and button: 3+5=8;
    clear; 5-3=2
  - sibling component: div: 3+5=8; 5-3=2

3. finish HTML cityView video on July 1, due date: next Wednesday (July 3) noon;
   no class on July 1.
