import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';


import { Routes } from '../client/Routes'

export const renderer = (req, store) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>);
        
    // node doesn't know how to handle jsx so we need a webpack steup to process this
    // this only returns a static html page. No js makes it through to the browser.
    return `
    <html>
        <head></head>
        <body>
            <div id="root">${content}</div>
            <script>
                window.INITIAL_STATE = ${serialize(store.getState())}
            </script>
            <script src="bundle.js"></script>
        </body>
    </html>
    `
}