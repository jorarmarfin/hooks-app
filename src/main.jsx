import React from 'react'
import ReactDOM from 'react-dom/client'
import {Layout} from "./05-useLayoutEffect/Layout.jsx";
import {TodoApp} from "./08-useReducer/TodoApp.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/*<CounterApp />*/}
      {/*<CounterWithCustomHook />*/}
      {/*<SimpleForm />*/}
      {/*<FormWithCustomHook />*/}
      {/*<MultipleCustomHook />*/}
      {/*<FocusScreen />*/}
      {/*<Layout />*/}
      <TodoApp />
  </React.StrictMode>,
)
