import React from 'react'
import {
  Admin,
  Resource,
  List,
  Datagrid,
  TextField,
  BooleanField,
} from 'react-admin'

import { Button, Card, CardContent, Dialog } from '@mui/material'
import localStorage from 'ra-data-local-storage'

const localDataProvider = localStorage({
  defaultData: {
    users: [
      {
        id: 1,
        name: 'John Doe',
        team: 'Feisty Ferrets',
        alive: true,
        boughtBack: false,
        target: "",
        history: [
        ],
        eliminations: [
        
        ]
      },
      {
        id: 2,
        name: 'Sarah Doe',
        team: 'Feisty Ferrets',
        alive: false,
        boughtBack: false,
        target: "",
        history: [
        ],
        eliminations: [
        
        ]
      },
      {
        id: 3,
        name: 'John Smith',
        team: 'Crazy Cats',
        alive: true,
        boughtBack: true,
        target: "",
        history: [
        ],
        eliminations: [
        
        ]
      },
      {
        id: 4,
        name: 'Juniper Fox',
        team: 'Crazy Cats',
        alive: true,
        boughtBack: true,
        target: "",
        history: [
        ],
        eliminations: [
        
        ]
      },
      {
        id: 5,
        name: 'Felix Mark',
        team: 'Zany Zebras',
        alive: false,
        boughtBack: true,
        target: "",
        history: [
        ],
        eliminations: [
        
        ]
      },
      {
        id: 6,
        name: 'Pedro Williams',
        team: 'Zany Zebras',
        alive: true,
        boughtBack: true,
        target: "",
        history: [
        ],
        eliminations: [
        
        ]
      },
      {
        id: 7,
        name: 'Terry Crews',
        team: 'Hilarious Hippos',
        alive: true,
        boughtBack: false,
        target: "",
        history: [
        ],
      },
      {
        id: 8,
        name: 'Sally Fox',
        team: 'Hilarious Hippos',
        alive: true,
        boughtBack: false,
        target: "",
        history: [
        ],
      },
    ]
  },
})

let assignTargets = () => {
  
  localDataProvider.getList('users', { filter: { alive: true }, sort: { field: "name", order: "accending" }, pagination: { page: 1 , perPage: 200 } } ).then(data => {
    let users = data.data

    // Group users by team
    let teams = {}
    users.forEach(user => {
      if (teams[user.team]) {
        teams[user.team].push(user)
      } else {
        teams[user.team] = [user]
      }
    })

    let teamNames = Object.keys(teams)

    // Assign targets
    Object.keys(teams).forEach(team => {
      let teamMembers = teams[team]

      // Set target to random team
      let targetName = teamNames[Math.floor(Math.random() * teamNames.length)]

      // If target is in history, target next team
      let iterations = 0;
      while (!targetName || teamMembers[0].history.includes(targetName) || targetName === team) {
        targetName = teamNames[Math.floor(Math.random() * teamNames.length)]
        iterations++
        if (iterations > 100) {
          console.log("Too many iterations! Lowering requirements")
          while (!targetName || targetName === team) {
            targetName = teamNames[Math.floor(Math.random() * teamNames.length)]
            if (iterations > 200) {
              break
            }
          }
          break
        }
      }

      teamMembers.forEach((member) => {
        localDataProvider.update('users', { id: member.id, data: {
          target: targetName,
          history: [...member.history, targetName]
        } })
      })
    })
  })
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

let ControlPanel = () => {
  return (
    <Card style={{margin: '1em'}}>
      <CardContent>
        <h1> Control Panel </h1>
        <Button variant='contained' onClick={assignTargets}>Assign Targets</Button>
      </CardContent>
    </Card>
  )
}

function App() {
  return (
    <Admin dataProvider={localDataProvider} dashboard={ControlPanel} title="Data Manager">
      <Resource name="users" list={Users} />
    </Admin>
  )
}

export default App
