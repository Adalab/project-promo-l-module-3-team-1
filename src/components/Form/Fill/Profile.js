import React from "react";
import PropTypes from "prop-types";
import defaultAvatar from "../../../images/photo-preview2.jpg";

class Profile extends React.Component {
  render() {
    const avatar = this.props.avatar === "" ? defaultAvatar : this.props.avatar;
    return (
      <div className="profile">
        <div
          className="profile__avatar"
          style={{ backgroundImage: `url(${avatar})` }}
        ></div>
      </div>
    );
  }
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Profile;
