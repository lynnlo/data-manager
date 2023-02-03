import React from 'react'
import { Admin, Resource, List, Datagrid, TextField, BooleanField } from 'react-admin'
import localStorage from 'ra-data-local-storage'

const localDataProvider = localStorage({
  defaultData: {
    users: [
      {
        id: 1,
        name: 'John Doe',
        team: 'Fiesty Ferrets',
        alive: true,
        boughtBack: false,
        target: "Jane Smith",
        history: [
          "John Smith"
        ]
      },
      {
        id: 2,
        name: 'Jane Doe',
        team: 'Fiesty Ferrets',
        alive: true,
        boughtBack: false,
        target: "John Smith",
        history: [
          "Jane Smith"
        ]
      },
      {
        id: 3,
        name: 'John Smith',
        team: 'Crazy Cats',
        alive: false,
        boughtBack: false,
        target: "Jane Doe",
        history: [
          "John Doe"
        ]
      },
      {
        id: 4,
        name: 'Jane Smith',
        team: 'Crazy Cats',
        alive: true,
        boughtBack: true,
        target: "John Doe",
        history: [
          "Jane Doe"
        ]
      },
      {
        id: 5,
        name: 'Mark John',
        team: 'Zany Zebras',
        alive: true,
        boughtBack: false,
        target: "Jane Doe",
        history: [
          "John Doe"
        ]
      },
      {
        id: 6,
        name: 'Jane Mark',
        team: 'Zany Zebras',
        alive: true,
        boughtBack: true,
        target: "John Doe",
        history: [
          "Jane Doe"
        ]
      }
    ]
  }
})

let assignTargets = () => {

}    

let Users = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="name" />
        <TextField source="team" />
        <TextField source="target" />
        <BooleanField source="alive" />
        <BooleanField source="boughtBack" />
      </Datagrid>
    </List>
  )
}

function App() {
  return (
    <Admin dataProvider={localDataProvider} title="Data Manager">
      <Resource name="users" list={Users} />
    </Admin>
  )
}

export default App
