import React, { useState } from 'react'
import {
  Admin,
  BooleanField,
  Count,
  Datagrid,
  FunctionField,
  List,
  NumberField,
  ReferenceManyCount,
  Resource,
  TextField,
} from 'react-admin'

import { Alert, Button, Card, CardContent, CircularProgress, Container, Typography } from '@mui/material'
import RefreshIcon from '@mui/icons-material/Refresh'
import DeleteIcon from '@mui/icons-material/Delete'

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
          'Sarah Doe',
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
        alive: false,
        boughtBack: false,
        target: "",
        history: [
        ],
        eliminations: [
          'Felix Mark',
        ]
      },
      {
        id: 7,
        name: 'Terry Crews',
        team: 'Hilarious Hippos',
        alive: false,
        boughtBack: false,
        target: "",
        history: [
        ],
        eliminations: [
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
        eliminations: [
          'Pedro Williams',
        ],
      },
      {
        id: 9,
        name: 'James Kurt',
        team: 'Silly Sharks',
        alive: true,
        boughtBack: false,
        target: "",
        history: [
        ],
        eliminations: [
        ],
      },
      {
        id: 10,
        name: 'Sally Kurt',
        team: 'Silly Sharks',
        alive: true,
        boughtBack: false,
        target: "",
        history: [
        ],
        eliminations: [
          'Terry Crews',
        ],
      },
      {
        id: 11,
        name: 'Harry Potter',
        team: 'Witty Wolves',
        alive: false,
        boughtBack: false,
        target: "",
        history: [
        ],
        eliminations: [
        ],
      },
      {
        id: 12,
        name: 'Ron Weasley',
        team: 'Witty Wolves',
        alive: true,
        boughtBack: false,
        target: "",
        history: [
        ],
        eliminations: [
        ],
      },
      {
        id: 13,
        name: 'Hermione Granger',
        team: 'Inching Insects',
        alive: false,
        boughtBack: true,
        target: "",
        history: [
        ],
        eliminations: [
        ],
      },
      {
        id: 14,
        name: 'Luna Lovegood',
        team: 'Inching Insects',
        alive: true,
        boughtBack: false,
        target: "",
        history: [
        ],
        eliminations: [
        ],
      },
      {
        id: 15,
        name: 'Draco Malfoy',
        team: 'Precious Pigs',
        alive: true,
        boughtBack: true,
        target: "",
        history: [
        ],
        eliminations: [
          'Hermione Granger',
        ],
      },
      {
        id: 16,
        name: 'Neville Longbottom',
        team: 'Precious Pigs',
        alive: true,
        boughtBack: false,
        target: "",
        history: [
        ],
        eliminations: [
        ],
      },
      {
        id: 17,
        name: 'Fred Weasley',
        team: 'Great Gophers',
        alive: false,
        boughtBack: true,
        target: "",
        history: [
        ],
        eliminations: [
        ],
      },
      {
        id: 18,
        name: 'George Weasley',
        team: 'Great Gophers',
        alive: true,
        boughtBack: false,
        target: "",
        history: [
        ],
        eliminations: [
          'Neville Longbottom',
          'Severus Snape',
          'Harry Potter',
        ],
      },
      {
        id: 19,
        name: 'Ginny Weasley',
        team: 'Lonely Lizards',
        alive: true,
        boughtBack: false,
        target: "",
        history: [
        ],
        eliminations: [
        ],
      },
      {
        id: 20,
        name: 'Severus Snape',
        team: 'Lonely Lizards',
        alive: false,
        boughtBack: true,
        target: "",
        history: [
        ],
        eliminations: [
          'Fred Weasley',
        ],
      },
    ],
  },
})

let assignTargets = () => {
  
  localDataProvider.getList('users', { filter: { alive: true }, sort: { field: "name", order: "ascending" }, pagination: { page: 1 , perPage: 200 } } ).then(data => {
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
    let usedTeams = []

    // Assign targets
    Object.keys(teams).forEach(team => {
      let teamMembers = teams[team]

      // Set target to random team
      let targetName = teamNames[Math.floor(Math.random() * teamNames.length)]

      // If target is in history, target next team
      let iterations = 0;
      while (!targetName || teamMembers[0].history.includes(targetName) || targetName === team || usedTeams.includes(targetName)) {
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

      usedTeams.push(targetName)

      teamMembers.forEach((member) => {
        localDataProvider.update('users', { id: member.id, data: {
          target: targetName,
          history: [...member.history, targetName]
        } })
      })
    })
  })
}

let clearHistory = () => {
  localDataProvider.getList('users', { filter: { alive: true }, sort: { field: "name", order: "ascending" }, pagination: { page: 1 , perPage: 200 } } ).then(data => {
    let users = data.data

    users.forEach(user => {
      localDataProvider.update('users', { id: user.id, data: {
        target: "",
        history: []
      } })
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
        <FunctionField label="Eliminations" render={record => record.eliminations.length} />
      </Datagrid>
    </List>
  )
}

let ControlPanel = () => {
  let [totalParticipants, setTotalParticipants] = useState(-1)
  let [totalEliminations, setTotalEliminations] = useState(-1)
  let [totalTeams, setTotalTeams] = useState(-1)

  localDataProvider.getList('users', { filter: { alive: true }, sort: { field: "name", order: "ascending" }, pagination: { page: 1 , perPage: 200 } } ).then(data => {
    setTimeout(() => {setTotalParticipants(data.total)}, 500)
  })

  localDataProvider.getList('users', { filter: { alive: true }, sort: { field: "name", order: "ascending" }, pagination: { page: 1 , perPage: 200 } } ).then(data => {
    let users = data.data
    let eliminations = 0
    users.forEach(user => {
      eliminations += user.eliminations.length
    })
    setTimeout(() => {setTotalEliminations(eliminations)}, 500)
  })

  localDataProvider.getList('users', { filter: { alive: true }, sort: { field: "name", order: "ascending" }, pagination: { page: 1 , perPage: 200 } } ).then(data => {
    let users = data.data
    let teams = {}
    users.forEach(user => {
      if (teams[user.team]) {
        teams[user.team].push(user)
      } else {
        teams[user.team] = [user]
      }
    })
    setTimeout(() => {setTotalTeams(Object.keys(teams).length)}, 500)
  })

  return (
    <Card style={{margin: '1em'}}>
      <CardContent>
        <Container>
        <Typography variant='h2' sx={ { m: 2 } }> Dashboard </Typography>
        
        <br />

        <Typography variant='h6' sx={ { m: 2 } }> Total Participants: </Typography>
        {
          totalParticipants === -1 ? <CircularProgress /> : <Typography variant='h1' sx={ { m: 2 } }> {totalParticipants} </Typography>
        }

        <Typography variant='h6' sx={ { m: 2 } }> Total Eliminations: </Typography>
        {
          totalParticipants === -1 ? <CircularProgress /> : <Typography variant='h1' sx={ { m: 2 } }> {totalEliminations} </Typography>
        }

        <Typography variant='h6' sx={ { m: 2 } }> Total Teams: </Typography>
        {
          totalParticipants === -1 ? <CircularProgress /> : <Typography variant='h1' sx={ { m: 2 } }> {totalTeams} </Typography>
        }


        </Container>

        <Container>
          <Button variant='contained' startIcon={<RefreshIcon />} sx={ { m: 2 } } onClick={assignTargets}>Assign Targets</Button>
          <Button variant='contained' startIcon={<DeleteIcon />} color="error" sx={ { m: 2 } } onClick={clearHistory}>Clear History</Button>
        </Container>
      </CardContent>
    </Card>
  )
}

function App() {
  return (
    <Admin dataProvider={localDataProvider} dashboard={ControlPanel} title="Data Manager">
      <Resource name="users" list={Users} />
      <Alert>
        <h1> A </h1>
      </Alert>
    </Admin>
  )
}

export default App
