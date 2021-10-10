import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bojnice-castle-1603142898.jpg',
    address: 'Test address',
    description: 'Test',
  },
  {
    id: 'm2',
    title: 'A First Meetup2',
    image:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bojnice-castle-1603142898.jpg',
    address: 'Test address2',
    description: 'Test3',
  },
  {
    id: 'm3',
    title: 'A First Meetup3',
    image:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bojnice-castle-1603142898.jpg',
    address: 'Test address3',
    description: 'Test3',
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
