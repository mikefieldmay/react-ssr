import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet'
import { Routes } from '../client/Routes'

export const renderer = (req, store, context) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>);

    const helmet = Helmet.renderStatic()
        
    // node doesn't know how to handle jsx so we need a webpack steup to process this
    // this only returns a static html page. No js makes it through to the browser.
    return `
    <html>
        <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            <!-- Compiled and minified CSS -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        </head>
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