import React, { useState } from 'react'
import {
  Admin,
  ArrayInput,
  BooleanField,
  BooleanInput,
  Create,
  Datagrid,
  Edit,
  FunctionField,
  List,
  Resource,
  SimpleForm,
  SimpleFormIterator,
  TextField,
  TextInput,
  Toolbar,
} from 'react-admin'

import { Button, Card, CardContent, CircularProgress, Container, Grid, Typography } from '@mui/material'
import RefreshIcon from '@mui/icons-material/Refresh'
import DeleteIcon from '@mui/icons-material/Delete'

import localStorage from 'ra-data-local-storage'

//#region Data Provider
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
//#endregion

//#region Dashboard
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
  localDataProvider.getList('users', { sort: { field: "name", order: "ascending" }, pagination: { page: 1 , perPage: 200 } } ).then(data => {
    let users = data.data

    users.forEach(user => {
      localDataProvider.update('users', { id: user.id, data: {
        target: "",
        history: []
      } })
    })
  })
}

let Dashboard = () => {
  let [totalParticipants, setTotalParticipants] = useState(-1)
  let [totalEliminations, setTotalEliminations] = useState(-1)
  let [totalBoughtBack, setTotalBoughtBack] = useState(-1)
  let [totalTeams, setTotalTeams] = useState(-1)

  localDataProvider.getList('users', { filter: { alive: true }, sort: { field: "name", order: "ascending" }, pagination: { page: 1 , perPage: 200 } } ).then(data => {
    setTimeout(() => {setTotalParticipants(data.total)}, 300)
  })

  localDataProvider.getList('users', { sort: { field: "name", order: "ascending" }, pagination: { page: 1 , perPage: 200 } } ).then(data => {
    let users = data.data
    let eliminations = 0
    users.forEach(user => {
      eliminations += user.eliminations.length
    })
    setTimeout(() => {setTotalEliminations(eliminations)}, 800)
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
    setTimeout(() => {setTotalTeams(Object.keys(teams).length)}, 1000)
  })

  localDataProvider.getList('users', { filter: { boughtBack: true }, sort: { field: "name", order: "ascending" }, pagination: { page: 1 , perPage: 200 } } ).then(data => {
    setTimeout(() => {setTotalBoughtBack(data.total)}, 500)
  })

  return (
    <Card style={{margin: '1em'}}>
      <CardContent>
        <Container>
          <Typography variant='h2' sx={ { m: 2 } }> Dashboard </Typography>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant='h6' sx={ { m: 2 } }> Total Alive Participants: </Typography>
              {
                (totalParticipants === -1) ? <CircularProgress /> : <Typography variant='h1' sx={ { m: 2 } }> {totalParticipants} </Typography>
              }
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant='h6' sx={ { m: 2 } }> Total Eliminations: </Typography>
              {
                (totalEliminations === -1) ? <CircularProgress /> : <Typography variant='h1' sx={ { m: 2 } }> {totalEliminations} </Typography>
              }
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant='h6' sx={ { m: 2 } }> Total Alive Teams: </Typography>
              {
                (totalTeams === -1) ? <CircularProgress /> : <Typography variant='h1' sx={ { m: 2 } }> {totalTeams} </Typography>
              }
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant='h6' sx={ { m: 2 } }> Total Amount Raised: </Typography>
              {
                (totalParticipants === -1 || totalBoughtBack === -1) ? <CircularProgress /> : <Typography variant='h1' sx={ { m: 2 } }> ${10 * (totalParticipants + totalBoughtBack)} </Typography>
              }
            </Grid>
          </Grid>

          
        </Container>

        <Container>
          <Button variant='contained' startIcon={<RefreshIcon />} sx={ { m: 2 } } onClick={assignTargets}>Assign Targets</Button>
          <Button variant='contained' startIcon={<DeleteIcon />} color="error" sx={ { m: 2 } } onClick={clearHistory}>Clear History</Button>
        </Container>
      </CardContent>
    </Card>
  )
}
//#endregion

//#region Users
let Users = () => {
  return (
    <List>
      <Datagrid>
        <FunctionField label="Name" render={
          record => (
            <Button color={record.alive ? "success" : "error"} onClick={() => {
              window.location.href = "/#/users/" + record.id
            }}>
              {record.name}
            </Button>
          )
        } />
        <TextField source="team" />
        <TextField source="target" />
        <BooleanField source="alive" />
        <BooleanField source="boughtBack" />
        <FunctionField label="Eliminations" render={record => record.eliminations.length} />
      </Datagrid>
    </List>
  )
}

let UsersCreate = () => {
  let [team, setTeam] = useState("")
  let [teamExists, setTeamExists] = useState(false)

  let [name, setName] = useState("")
  let [nameExists, setNameExists] = useState(false)

  let checkTeam = (e) => {
    let teamName = e.target.value
    setTeam(teamName)
    localDataProvider.getList('users', { sort: { field: "name", order: "ascending" }, pagination: { page: 1 , perPage: 200 } } ).then(data => {
      let users = data.data
      let teams = {}
      users.forEach(user => {
        if (teams[user.team]) {
          teams[user.team].push(user)
        } else {
          teams[user.team] = [user]
        }
      })
      if (teams[teamName]) {
        setTeamExists(true)
      }
      else {
        setTeamExists(false)
      }
    })
  }

  let checkName = (e) => {
    let name = e.target.value
    setName(name)
    localDataProvider.getList('users', { sort: { field: "name", order: "ascending" }, pagination: { page: 1 , perPage: 200 } } ).then(data => {
      let users = data.data
      let names = []
      users.forEach(user => {
        names.push(user.name)
      })
      if (names.includes(name)) {
        setNameExists(true)
      }
      else {
        setNameExists(false)
      }
    })
  }

  let createUser = (e) => {
    e.preventDefault()
    localDataProvider.create('users', { data: { name: name, team: team, alive: true, boughtBack: false, eliminations: [] } })
  }



  let CreateActions = () => (
    <Toolbar>
      <Button disabled={(team === "" && name === "")} variant='contained' sx={{ m: 2 }} color="success" onClick={e => {createUser(e); window.location.href = "/#/users" }}> Save and Return </Button>
      <Button disabled={(team === "" && name === "")} variant='outline' sx={{ m: 2 }} onClick={e => {createUser(e); window.location.reload(false) }}> Save and Add  </Button>
      <Button variant='outline' sx={{ m: 2 }} onClick={ () => { window.location.href = "/#/users" } }> Cancel </Button>
    </Toolbar>
  )
  
  return (
    <Create>
      <SimpleForm toolbar={<CreateActions />}>
        <TextInput label="Participant Name" source="name" onChange={checkName} />
        <TextInput label="Team Name" source="team" onChange={checkTeam} />
        { 
          team !== "" && 
          (teamExists ?
            <Typography variant='h6' sx={ { m: 2 } } style={{color:"green"}}> '{team}' is already a team. </Typography> :
            <Typography variant='h6' sx={ { m: 2 } }> '{team}' will create a new team. </Typography>
          )
        }
        {
          (name !== "" && nameExists) &&
          <Typography variant='h6' sx={ { m: 2 } } style={{color:"red"}}> '{name}' is already a participant. Consider changing the name. </Typography>
        }
      </SimpleForm>
    </Create>
  )
}

let UsersEdit = () => {
  let [team, setTeam] = useState("")

  let [name, setName] = useState("")

  let EditActions = () => (
    <Toolbar>
      <Button disabled={(team === "" && name === "")} variant='contained' sx={{ m: 2 }} color="success" onClick={e => {createUser(e); window.location.href = "/#/users" }}> Save and Return </Button>
      <Button disabled={(team === "" && name === "")} variant='outline' sx={{ m: 2 }} onClick={e => {createUser(e); window.location.reload(false) }}> Save  </Button>
      <Button variant='outline' sx={{ m: 2 }} onClick={ () => { window.location.href = "/#/users" } }> Cancel </Button>
    </Toolbar>
  )

  return (
    <Edit>
      <SimpleForm toolbar={<EditActions />}>
        <TextInput source="name" onChange={e => { setName(e.target.value) }} />
        <TextInput source="team" onChange={e => { setTeam(e.target.value) }} />
        <TextInput source="target" />
        <BooleanInput source="alive" />
        <BooleanInput source="boughtBack" />
        <ArrayInput source="eliminations" disabled>
          <SimpleFormIterator disabled>
            <TextInput disabled />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  )
}
//#endregion

function App() {
  return (
    <Admin dataProvider={localDataProvider} dashboard={Dashboard} title="Data Manager">
      <Resource name="users" list={Users} create={UsersCreate} edit={UsersEdit} />
    </Admin>
  )
}

export default App
