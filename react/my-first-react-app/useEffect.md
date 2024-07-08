## dependency
# dependency []
- componentDidMount and only run once (when the component is rendered for the first time)
  `useEffect(() => {
    console.log('useEffect is called');
    funFromParent(countNumber);
  }, [])`

# no dependency
- disadvantage: be called on every render cycle the component

# dependency with state
- useEffect will be called when the state is changed and the componentDidMount
- componentDidMount + componentDidUpdate
  `useEffect(() => {
    console.log('useEffect is called');
    funFromParent(countNumber);
  }, [countNumber])`

## return of the callback function in useEffect
- the callback in the return are the things you need to do before unmounting
- for some effects need clean up to avoid memory leak
- example: return a callback function to invoke clearInterval
  `useEffect(() => {
    console.log('useEffect is called');
    const interval = setInterval(() => {
      console.log('interval');
    }, 1000);
    return () => {
      clearInterval(interval);
    }
  }, [])`
//when the component is unmounted or the stage changes, the interval will be cleared
# cleanup
- return a function to clean up the effect
  `useEffect(() => {
    console.log('useEffect is called');
    funFromParent(countNumber);
    return () => {
      console.log('clean up');
    }
  }, [countNumber])`

//classwork
 1. create a state, data type is number with 10
 2. render the state in JSX
 3. update the state, make it decrement by 1 every 1 second
 4. when number is 0, stop the decrement

## In summary
useEffect is to decide what to do in each render cycle(componentDidMount, componentDidUpdate, componentWillUnmount)
the callback function
the dependency array
the return of the callback function

//homework
create a child component
SearchBar component: input, onchange, get the value
when click the button, pass the value to parent(App component)
App component: render the value from the child component
add other button to display/hide(2s delay) the search bar

finish cityview react video
