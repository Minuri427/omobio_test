import React, {Component} from 'react';
import './ViewUser.css';
//import TimeAgo from 'react-timeago';
class ViewUser extends Component {

constructor(props){
super(props);
}

render() {

let userDetail = this.props.detailUser
.map(function (detailUser, index) {
return (
<div className="medium-10 columns userlist" key={index}>

<div className="people-you-might-know">

<div className="row add-people-section">
{/* <div className="small-12 medium-10 columns about-people"> */}

<div className="about-people-author">
<p className="author-name">
<b>user id: {detailUser.user_id} </b><b>name: {detailUser.name}</b><b>username: {detailUser.username}</b><b>email: {detailUser.email}</b> 
<br/>
</p>
</div>
</div>
</div>
{/* </div> */}
</div>
)
}, this);

return (
<div>
<b className="welcomequote">Welcome {this.props.name} !</b>
{userDetail}

</div>
);
}

}

export default ViewUser;