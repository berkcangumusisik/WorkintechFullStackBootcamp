import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import OrderForm from './pages/OrderForm'
import Success from './pages/Success'
import './App.css'

function App() {
  const [orderData, setOrderData] = useState(null)

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/order">
          <OrderForm setOrderData={setOrderData} />
        </Route>
        <Route path="/success">
          <Success orderData={orderData} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
