import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Routes } from '../client/Routes'

export const renderer = (req) => {
    const content = renderToString(
        <StaticRouter location={req.path} context={{}}>
            <Routes />
        </StaticRouter>);
    // node doesn't know how to handle jsx so we need a webpack steup to process this
    // this only returns a static html page. No js makes it through to the browser.
    return `
    <html>
        <head></head>
        <body>
            <div id="root">${content}</div>
            <script src="bundle.js"></script>
        </body>
    </html>
    `
}