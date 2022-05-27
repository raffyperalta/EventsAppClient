import React, {useState, useEffect} from 'react'
import { Table } from 'reactstrap'
import axios from 'axios'
import Events from '../components/Events'

function Dashboard(){
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(false);
  const [eventsPerPage, setEventsPerPage] = useState(5);

  useEffect(() =>{
    const fetchEvents = async() =>{
      setLoading(true);
      const res = await axios.get('http://localhost:3001/users/attend/18')
      setEvents(res.data)
      setLoading(false);
    }

    fetchEvents();
  }, []);

  // const indexOfLastEvent = currentPage * eventsPerPage;
  // const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  // const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent)

  return(
    // <div className='container mt-5'>
    //   
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Dashboard</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              Event Name
            </th>
            <th>
              Date To
            </th>
            <th>
              Date From
            </th>
            <th>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <Events events={events} loading={loading}/>
        </tbody>
        
        
      </Table>
    </div>
    
  ) 
}

export default Dashboard