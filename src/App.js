import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./style";
import { UserContext } from "./contexts/UserContext";
import { EditItem } from "./components/EditItem";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { NewItem } from "./components/NewItem";
import { SignUp } from "./components/SignUp";

export const App = () => {
    let name = "";
    let token = "";

    const userStringify = localStorage.getItem;
    if (userStringify) {
        const userLocal = JSON.parse(userStringify);
        name = userLocal.name;
        token = userLocal.token;
    }
    const [user, setUser] = useState({
        name,
        token
    });

    return (
		<>
			<GlobalStyle />
			<UserContext.Provider value={{ user, setUser }}>
				<BrowserRouter>
					<Routes>
						<Route path = '/' element = {<Login />} />
						<Route path = '/cadastro' element = {<SignUp />} />
						<Route path = '/homepage' element = {<Home />} />
						<Route path = '/item/:type' element = {<NewItem />} />
						<Route path = '/editar/:type/:id' element = {<EditItem />} />
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</>
	);
}