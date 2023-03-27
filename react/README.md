# **React**


## **Getting Started**

- Creating project : `npx create-react-app abc_xyz`
- Running application : `npm start`
- Entry point of projec will be in sr/index.js


## **Classname**

```
App.css
------------------

.heading1{
  color: yellowgreen;
}

.heading2{
  color: pink;
}

```
```
App.js
----------------
import logo from './logo.svg';
import './App.css';

function App() {

  let heading2ClassName = "heading2" #declaring classname as variable

  return (
    <div className="App">
      <h1 className="heading1"> Class Name normal</h1>
      <h2 className={heading2ClassName}> Class name with Variable </h2>
      <h2 style={{color : "blue"}}> Class name instyle tag directly </h2>
    </div>
  );
}

export default App;
```

## **Components**

- Good Practice create seperate folder for each component :
```
/src/components/
        |
        |--Heading/
            |-- Heading.css
            |-- Heading.js
        |--Nav
           |-- Nav.css
           |-- Nav.js

````
---------------
## **Passing Data b/w components**


### **Passing variable(companyName) from Parent Component ( App ) to child component ( Header )**

```
Parent Component File
---------------------
function App() {
  let companyName = "Viren Corp"
  return (
    <div className="App">
      <Header  companyName={companyName} />
    </div>
  );
}
```
**Accessing companyName variable in child component ( Header )**

```
Child Component File
----------------------------

export default function Header(props) {
    let className = "companyName"

    let companyName = props.companyName  #value accessed using props

    return (
        <div className="Header">
            <h1 className={className}> Company Name : {companyName} </h1>
            <Nav/>
        </div>
    )
 
}
```

### **Passing Array(links) from Parent Component (Nav) to child component (Link)**

```
Parent Component File
---------------------
export default function Nav() {

    const links = [
        { title: "React", url: "https://react.dev/" },
        { title: "Node", url: "https://nodejs.org/en" },
        { title: "Express JS", url: "https://expressjs.com/" },
        { title: "Next JS", url: "https://nextjs.org/" },
    ]

    return (
        <div className="Nav">
            <ul>
                {
            #here we are rendering all the links while passing individual link object to Link Component.
            # Key has to passed in order to distinguish that each componet are unique

                    links.map((lnk, idx) => {

                        return <Link link={lnk} key={idx} />
                    
                    })

                }
            </ul>
        </div>
    )

}
```

```
Child Component File
----------------------------
export default function Link(props) {

    let title = props.link.title
    let url = props.link.url
    return (
        <li><a href={url}>{title}</a></li>
    )

}
```

## **Events in React**

Events linke onclick or onchange event can be found in documentation

```
export default function SearchBar(){

    function addToSearchHistory(ev){
        console.log("Button Clicked")

    }
    return (
       <input type="text" onInput={()=>{console.log("On Input Event occured")}}/>
       
       <button  onClick={addToSearchHistory} > 
       
       Search
       </button>
    )
}

```


## **useState - Hooks**

when value or state changes of variable that whole component re-renders automatically.

const [historyList, sethistoryList] = useState([]) /* Here default value of historyList is [] (empty array) *

Here historyList is the variable name and sethistoryList() is the name of function. By calling sethistoryList(value) you can change the value of historyList and the component re-renders.

If you try to change the value of historyList without the function the component will not re-renders.

```
Will not work if you do this way : historyList.push("Hello")

-------------

Will work : sethistoryList([...historyList,searchName])
```

**useState** function reference can be also passed as props and can be invoked in child component through pros.sethistoryList().



```
const [historyList, sethistoryList] = useState([])

function addToSearchHistory(ev){
        let searchName = document.getElementById('searchName').value
        console.log("Button Clicked")

        sethistoryList([...historyList,searchName]) /*Appending new value in existing array*/

}


function clearSearchHistory(){
    sethistoryList([])
}

History Values
<div className="search-history">
    <ul>
      {
        historyList.map((h,idx)=>{

            if(h){
                  return <li key={idx}>{h}</li>
            }
                
        })
      }
    </ul>
</div>

```

## **useEffect - Hooks**

Once Initial rendering is done then you want something to do like API calls, Getting location, access local storage, update state.


```
empty array([]) in useEffect shows that not to watch any variable and it triggers only once.
---------------------------------------------

useEffect(()=>{

    console.log("Intial render completed")
    fetchData()

},[])

async function fetchData() {}

```

```
It watches for every time films object changes
-----------------------------------------------

useEffect(()=>{
    console.log("Watches films array whenver values changes of films")

},[films])

```

## **Routing**

You need to install as dependencies `npm install react-router-dom --save`

Other hooks are availabe in same library like useHistory, useParam, useLocation

For Advance Routing : https://www.youtube.com/watch?v=PNdYfs3cdrg&list=PLyuRouwmQCjmMfs-HOsDGoaN6JiYrC6Ms&index=10&ab_channel=SteveGriffith-Prof3ssorSt3v3

Also add below code in Main root file(Index.js)
```
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

```

In App.js Where you will get all routes
```
import { Routes, Route } from 'react-router-dom'

function App() {
  let companyName = "Viren Corp"
  return (
    <div className="App">
      <Header companyName={companyName} />

      <Routes>
        <Route path="/search" element={<SearchBar />}>
        </Route>
      </Routes>

    </div>

  );
}
```

## **PropTypes**

To give default value to props.
```
Component_name.defaultProps = {

  time : Date.now(),
  age : 18

}
```

Giving Types to props values
```
Component_name.propTypes = {

  time : PropTypes.number,

  isLogged : PropTypes.bool,

  age : PropTypes.number.isRequired   
  /* ensure that you have compulsary pass this value in the props */

  children : PropTyes.arrayOf(PropTypes.element) // for Component

  name : PropTypes.oneOfType([PropTypes.string,PropTypes.array])  // Name can take multiple data-type

}
```

## **useRef**

Use case when user input it should be saved in Parent component and you want that value to used in mulitple child component.(https://www.youtube.com/watch?v=VwdPy4xcHNw&list=PLyuRouwmQCjmMfs-HOsDGoaN6JiYrC6Ms&index=12&ab_channel=SteveGriffith-Prof3ssorSt3v3)

```
let inputRef = createRef();  //creates a DOM container

<input type="text" ref={inputRef}>    // pass value of ref in component


inputRef.current.value  // to access value of input element dom container

```

## **Context API and hooks**

Problem : In order to pass value from parent component to child you have to pass as props and you have maintain those values and pass it manually.

Provider where you define object.

Hooks is where you can access those values.

```
Define Provider in seperate folder
----------------------------------
import {createContext, useState,useContext} from 'react';

const FavContext = createContext();

function FavProvider(props){

  const [fav,setfav] = useState({});

  return <FavContex.Provier value={[fav,setfav]} {..props}>

}

function useFav(){
  
  const ctx = useContext(FavContext)
  return ctx;       // will give [fav,setfav]

}

export {FavProvider, useFav}
```

Now import this context in your main project in this all the child component defined under FavProvider will have acess to those values.

```
In parent component
---------------------
import {FavProvider} from '../context/favContex.js'

return(
  <FavProvider>
      <ChildComponent/>
  </FavProvider>
)
```

```
In child component to access the props value using context
----------------------------------------------------------
import {useFav} from '../context/favContex.js'

function component_name(){

  const  [fav,setfav] = useFav()  // currently fav will be to default value i.e. {}

}
```

## **Production Build**

- `yarn build` : It will build static project in sepearate folder
- `yarn start` : will serve this project folder named build 
- or `npx server -b build` : to server build folder