import React from 'react'

const NotFoundPageBase = ({
    staticContext ={}
}) => {
    staticContext.notFound = true
    return <h1>Ooooops, Route not found</h1>
}

export const NotFoundPage =  {
    component: NotFoundPageBase
}