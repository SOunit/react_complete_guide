import Card from './Card';

import classes from './UserDisplay.module.css';

const UserDisplay = (props) => {
  const list = props.users.map((user) => (
    <div className={classes.userData} key={user.id}>
      {user.name} ({user.age} years old)
    </div>
  ));

  return <Card>{list}</Card>;
};

export default UserDisplay;
