import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import CloudUpload from '@material-ui/icons/CloudUpload';
import '../drawer/Drawer.css';
import drawerData from '../../data/drawerData.json';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ChatIcon from '@material-ui/icons/Chat';
import AvTimerIcon from '@material-ui/icons/AvTimer';

const Components = {
  upload: CloudUpload,
  happiness: EmojiEmotionsIcon,
  trending: WhatshotIcon,
  transcription: ChatIcon,
  mom:AvTimerIcon
};

const useStyles = makeStyles({
  list: {
    width: 250,
    textDecoration : 'black',
    fontWeight : 'bold'
  }
});

export default function TemporaryDrawer(props) {


  useEffect(() => {
    toggleDrawer(props.isClicked)
  }, [props.isClicked])

  const classes = useStyles();

  const toggleDrawer = (anchor) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    props.clickHandler(anchor);
  };

  const list = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {drawerData.map(data => (
          <a class='sprint-content' key={data.id} href={data.url}>
            <ListItem button>
              <ListItemIcon>{React.createElement(Components[data.component])}</ListItemIcon>
              <ListItemText primary={data.buttonText} />
            </ListItem>
          </a>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <React.Fragment key='left'>
        <Drawer anchor='left' open={props.isClicked} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
