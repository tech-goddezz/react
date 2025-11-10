function UserData({id, name, username}) {
    return (
            <div style={{border:'1px solid red', color:'green', margin: '10px'}} >
                        <div> {name} </div>
                        <div> {username} </div>
                        <div> {id} </div>
            </div>
        
    );
}

export default UserData;