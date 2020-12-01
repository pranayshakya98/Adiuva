import React, { Component } from "react";
import Navbar from "../../MainNavbar";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import CalendarToday from '@material-ui/icons/CalendarToday';
import Link from 'react-router-dom/Link';
import app, { db } from '../../utils/fireApp';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import BlockIcon from '@material-ui/icons/Block';
import Button from '@material-ui/core/Button';
import './Profile.css';

// Class to display profile component
class Profile extends Component {
    // using state for user detail, posts
    state = {
        user: {
            fName: "",
            mName: "",
            lName: "",
            city: "",
            zipcode: "",
            stateName: "",
            imgURL: "",
            about: "",
            email: "",
            verification: false,
            registeredAt: null
        },
        dPosts: null
    }
    // render the component
    render () {
        const { history } = this.props;
        if (!(app.auth().currentUser)) {
            // Redirecting the user to log-in if logged out
            history.push("/login");
        };

         // geting user current id 
      const uid  = app.auth().currentUser.uid;
      if (uid){
      // fetching user informations from database
      db
        .collection("users")
        .doc(uid)
        .get()
        .then((doc) => {
            this.setState({
                user:  {    
                    fName: doc.data().fName,
                    mName: doc.data().mName,
                    lName: doc.data().lName,
                    city: doc.data().city,
                    zipcode: doc.data().zipcode,
                    stateName: doc.data().stateName,
                    imgURL: doc.data().imgURL,
                    about: doc.data().about,
                    email: doc.data().email,
                    verification: doc.data().verification,
                    registeredAt: doc.data().registeredAt
                },
            });
        })
        .catch((err) => alert(err));

        db
        .collection("dPosts")
        .where("userID", "==", uid)
        .get()
        .then((data) => {
            let posts = [];
            //pushing each and every posts after retrieving from firebase database to posts[]
            data.forEach((doc) => {
                posts.push({
                    postID: doc.id,
                    userName: doc.data().userName,
                    postType: doc.data().postType,
                    body: doc.data().body,
                    zipcode: doc.data().zipcode,
                    imgURL: doc.data().imgURL,
                    createdAt: doc.data().createdAt,
                    uid: doc.data().userID,
                });
            });
            this.setState({
                dPosts: posts,
            });
        })
        .catch((err) => alert(err));
    }

    let verified = null;
    let verifiedStr = ""
        if (this.state.user.verification) {
            verified = <VerifiedUserIcon style={{ color: "blue" }} />;
            verifiedStr = "Verified"
        }
        else {
            verified = <BlockIcon style={{ color: "red" }} />;
            verifiedStr = "Not Verified. Please Email Valid ID to get Verified!"
        }

        const onPostDeleteHandler = (postID) => {
            db.doc(`dPosts/${postID}`).delete().then(() => {
                history.push("/profile");
            });
        };

        const onSubmitHandler = () => {
                try {
                    history.push("/deleteuser");
                } 
                catch (err) {
                    alert(err);
                }
            };
        dayjs.extend(relativeTime);

        let recentDposts = this.state.dPosts ? (
            this.state.dPosts.map((dPost) => 
                <Card className="card" justify="center" alignContent="center">
                    <CardContent className="card-content">
                    <Button variant="outlined" color="secondary" 
                    onClick={() => onPostDeleteHandler(dPost.postID)}>
                        DELETE
                    </Button>
                    <div className="authorDetail">
                        <Typography variant="body2" color="textSecondary">{dayjs(dPost.createdAt).fromNow()}</Typography>
                        <Typography variant="body1"><b>Post-Type: {dPost.postType}</b></Typography>
                        <Typography variant="body1">Zipcode: {dPost.zipcode}</Typography>
                    </div>
                        <Typography variant="body1">{dPost.body}</Typography>
                        <CardMedia component="img" image={dPost.imgURL} title="Post Image" className="img" />
                    </CardContent>
                </Card>)
            ) : <p> Loading... </p>;

        return (
            <><Navbar /><div className="user-container">
            <div class="row py-5 px-4">
                <div class="col-md-5 mx-auto">
                    <div class="bg-white">
                        <div class="px-4 pt-0 pb-4 cover-profile">
                            <div class="media align-items-end profile-head">
                                <div class="profile mr-3">
                                    <img src={this.state.user.imgURL} alt="Profile" width="200" class="rounded mb-2 img-thumbnail"></img>
                                    </div>
                                <div class="media-body mb-5 text-white">
                                    <h2 class="mt-0 mb-0">{this.state.user.fName} {this.state.user.lName}</h2>
                                        <h3><i class="fas fa-map-marker-alt mr-2 mb-2"></i> {this.state.user.city}, {this.state.user.state}</h3>
                                        <p class="mb-4">
                                            <CalendarToday color="primary" />{' '}<b>Joined {dayjs(this.state.user.registeredAt).format('MMM YYYY')}</b>
                                        </p>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div class="bg-light p-4 d-flex justify-content-end text-center">
                            <ul class="list-inline mb-0">
                                <li class="list-inline-item">
                                    <Link 
                                    class="connect-btn btn-outline-dark btn-block" 
                                    to={`/editprofile/${this.state.userID}`}>
                                        <h2><b>Edit Profile</b></h2>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div class="px-4 py-3">
                            <h3 class="mb-0">Details</h3>
                            <div class="p-4 rounded shadow-sm bg-light">
                                <b>
        <label>First Name: {" "}{this.state.user.fName}</label><br />
        <label>Middle Name: {" "}{this.state.user.mName}</label><br />
        <label>Last Name: {" "}{this.state.user.lName}</label><br />
        <label>Email: {" "}{this.state.user.email}</label><br />
        <label>City: {" "}{this.state.user.city}</label><br />
        <label>Zipcode: {" "}{this.state.user.zipcode}</label><br />
        <label>State: {" "}{this.state.user.stateName}</label><br />
        <label>Verification Status: {" "}{verified} {" "}{verifiedStr}</label><br />
        <label>About: {" "}{this.state.user.about}</label>
        </b>
                            </div>
                            <form onSubmit={onSubmitHandler} className=" form-cardbox">
                            <button className="btn-delete" type="submit">
                                Delete Profile
                            </button>
                        </form>
                        </div>
                        <div class="py-4 px-4">
                            <div class="d-flex align-items-center justify-content-between mb-3">
                                <h3 class="mb-0">Activities/Posts</h3>
                            </div>
                            <div class="row col-md-4 mx-auto">
                            {recentDposts}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </>
        );
        }
};
export default Profile;
