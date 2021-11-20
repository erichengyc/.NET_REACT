import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Header, List } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from '../layout/NavBar';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => {
      setActivities(response.data);
    })
  }, [])

  return (
    <>
      <NavBar />
      <Container style={{marginTop: '7em'}}> 
        <List>
        {activities.map(activity => (
          <List.Item keyF={activity.id}>
            {activity.title}
          </List.Item>
        ))}
      </List>
      </Container>


    </>
  );
}

export default App;
