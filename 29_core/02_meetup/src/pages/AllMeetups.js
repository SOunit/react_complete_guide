import axios from 'axios';
import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const AllMeetupsPage = () => {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          'https://fir-db-connection-sample-default-rtdb.firebaseio.com/meetups.json'
        );

        if (res.status !== 200) {
          throw new Error('Failed to fetch data');
        }

        const meetups = [];

        for (let key in res.data) {
          const meetup = res.data[key];
          meetups.push({ id: key, ...meetup });
        }

        meetups.reverse();

        setLoadedMeetups(meetups);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </div>
  );
};

export default AllMeetupsPage;
