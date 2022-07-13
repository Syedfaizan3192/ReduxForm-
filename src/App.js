import React from "react";
import SimpleForm from "./components/simpleform";
import store from "./reducers";
import ShowResults from './components/showresult'
import { formValues } from 'redux-form';

const App = () => {
  return (
    <div style={{ padding: 15 }} className='ui inverted segment container'>
      <h2>SYNC-FORM</h2>
      <SimpleForm onSubmit={ShowResults} />
      <formValues form="SyncValidationForm" />
    </div>
  )
}
export default App;
