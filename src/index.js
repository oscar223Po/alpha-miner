import React from 'react';
import ReactDOM from 'react-dom/client';

import App from "./App.js";
import './index.scss';

import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

import Transaction from './pages/Transaction.jsx';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "transaction",
		element: <Transaction />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
		{/* <App /> */}
	</React.StrictMode>
);
