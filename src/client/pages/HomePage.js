import React from 'react'

const HomePageContainer = () => (
    <div>
        <div>I am the best home component</div>
        <button onClick={() => console.log('Hi there')}>Press me</button>
    </div>
)

export const HomePage = {
    component: HomePageContainer
}