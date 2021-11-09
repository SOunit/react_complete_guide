import NewMeetupForm from '../components/meetups/NewMeetupForm';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const NewMeetupPage = () => {
  const history = useHistory();

  const addMeetupHandler = async (meetupData) => {
    try {
      const res = await axios.post(
        'https://fir-db-connection-sample-default-rtdb.firebaseio.com/meetups.json',
        meetupData
      );

      if (res.status !== 200) {
        throw new Error('Failed to post new meetup data');
      }

      // replace for no back to previous page
      history.replace('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
