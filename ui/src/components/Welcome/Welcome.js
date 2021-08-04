import React, {Component} from 'react';
import './Welcome.css';

class Welcome extends Component {
render() {
return (
<div>
<h2 className="welcometitle">University of Colombo School of Computing</h2>
<div className="columns btnswelcome">
<a href="/login" className="button btnlogin">Login</a>
<a href="/signup" className="button success">Signup</a>
</div>
</div>
);
}
}
export default Welcome;