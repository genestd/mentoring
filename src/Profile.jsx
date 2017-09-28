import React from 'react';
import { connect } from 'react-redux';

const Profile = props => (
  <div>
    <h1>Profile</h1>
    <div>username: {props.appState.profile.username}</  div>
    <div>name: {props.appState.profile.name}</div>
    <div>skills: {props.appState.profile.skills.map(
      skill => <span key={skill}>&nbsp;{skill}</span>)}</div>
    <div>languages: {props.appState.profile.languages}</div>
    <div>time_zone: {props.appState.profile.time_zone}</div>

  </div>
);

const mapStateToProps = state => ({
  appState: state.appState,
});

export default connect(mapStateToProps)(Profile);
