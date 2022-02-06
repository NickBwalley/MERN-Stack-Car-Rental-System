import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import {useSelector} from 'react-redux'

function Home() {
    const {cars} = useSelector(state=>state.carsReducer)
    return (
        <DefaultLayout>
            <h1>Home Page</h1>
            <h2>The length of cars array is {cars.length}</h2>
        </DefaultLayout>
    )
}

export default Home
