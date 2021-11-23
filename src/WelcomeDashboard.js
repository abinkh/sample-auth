const logoutButtonStyle = {
    margin: '10px 0 0 0',
    padding: '7px 10px',
    border: '1px solid #efffff',
    borderRadius: '3px',
    background: 'red', 
    fontSize: '15px',
    color: 'white',
    display: 'block'
};

const WelcomeDashboard =(props)=>{
    return(
        <div>
            <h1>Welcome Screen</h1>
            <hr/>
            <button style={logoutButtonStyle} onClick={props.handleLogout}>Logout</button>
        </div>
    )
}

export default WelcomeDashboard;