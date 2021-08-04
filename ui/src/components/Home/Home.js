import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Home.css';
import {PostData} from '../../services/PostData';
import ViewUser from "../ViewUser/ViewUser";
import { confirmAlert } from 'react-confirm-alert';
import '../../styles/react-confirm-alert.css';

class Home extends Component {

constructor(props) {
super(props);

this.state = {
data:[],
userDetail: '',
redirectToReferrer: false,
name:'',
};

this.getUserDetail = this.getUserDetail.bind(this);
this.logout = this.logout.bind(this);
}

componentWillMount() {

if(sessionStorage.getItem("userData")){
this.getUserDetail();
}

else{
this.setState({redirectToReferrer: true});
}

}

getUserDetail() {

let data = JSON.parse(sessionStorage.getItem("userData"));
this.setState({name:data.userData.name});
let postData = { user_id: data.userData.user_id};

if (data) {
PostData('userdetails', postData).then((result) => {
let responseJson = result;
if(responseJson.ViewUser){
this.setState({data: responseJson.ViewUser});
console.log(this.state);
}
});
}

}

logout(){
sessionStorage.setItem("userData",'');
sessionStorage.clear();
this.setState({redirectToReferrer: true});
}

render() {
if (this.state.redirectToReferrer) {
return (<Redirect to={'/login'}/>)
}

return (
<div className="row" id="Body">
<div className="medium-12 columns">
<a href="/" onClick={this.logout} className="logout">Logout</a>
<ViewUser detailUser = {this.state.data} name={this.state.name}/>
</div>
</div>
);
}
}

export default Home;