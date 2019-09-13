import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../styles/styles.scss';

function EditButton(props) {
  return (
    <button className='toEdit' onClick={props.onClick}>
      <img src='https://www.freeiconspng.com/uploads/edit-icon-png-24.png' />
    </button>
  )
}

function SaveButton(props) {
  return (
    <button className='toSave' onClick={props.onClick}>
      <img className='checkMark' src='https://www.pinclipart.com/picdir/big/95-952462_banner-transparent-mark-clip-art-at-check-mark.png' />
    </button>
  )
}

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleEditSave = this.handleEditSave.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);

  }

  handleEditClick() {
    this.setState({editing: true});
  }

  handleEditSave()  {
    this.setState({editing: false});
  }

  onEditSubmit = async (event) => {
    event.preventDefault()
    // let data = {
    //   gender: this.state.gender,
    //   age: this.state.age,
    //   bio: this.state.bio,
    //   photo: this.state.photo
    // };
    const { ...data } = this.state;
    console.log(data);
  }

  render() {

    const editing = this.state.editing;
    let button;

    if (editing) {
      button = <SaveButton onClick={this.handleEditSave} />
    } else {
      button = <EditButton onClick={this.handleEditClick} />
    }
    
    return (
      <div className='userProfile'>
        <header className='profHeader'>JustBreath</header>
          
        <div className='profBody'>
          <div className='userAvatar'>
            <img
              className='userImg'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTssR7u-ZG8fTV6IfGOgC_jasQSsDVJbf__50KTpO4YpV5pkH8Hsg'
              alt='user'
            />
            {button}
          </div>
          <div className='userInfo'>
            <p className='gender'>Gender: </p>
            <p className='age'>Age: </p>
            <p className='industry'>Industry: </p>
            <div className='aboutMe'>
              <p className='aboutMeInfo'>About Me: </p>
            </div>
          </div>
        </div>
        <footer className='profFooter'>Footer</footer>
      </div>
    );
  }
}

export default Profile;