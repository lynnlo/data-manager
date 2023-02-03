import React from 'react'
import { Admin, Resource, ListGuesser } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'

const localDataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

function App() {
  return (
    <Admin dataProvider={localDataProvider}>
      <Resource name="users" list={ListGuesser} />
    </Admin>
  )
}

export default App
