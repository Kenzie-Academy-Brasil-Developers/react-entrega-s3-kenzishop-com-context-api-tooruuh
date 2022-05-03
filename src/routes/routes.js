import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Cart from "../pages/cart";

export default function Routes() {
    return (
        <Switch>

            <Route  exact path="/">
                <Login />
            </Route>

            <Route  path="/dashboard">
                <Dashboard />
            </Route>

            <Route  path="/cart">
                <Cart />
            </Route>

        </Switch>
    )
}
