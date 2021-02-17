
import React,{useState} from 'react';

function HookCountThree() {
  const [name,setName] = useState({
      firstName : '',
      lastName  : ''
  });
  
  return (
    <div className="App">
        <form>
            <input
                value={name.firstName}
                type="text"
                onChange={e => setName({...name, firstName:e.target.value})}
            />
            <input
                value={name.lastName}
                type="text"
                onChange={e => setName({...name, lastName:e.target.value})}
            />

            <h5>First Name : {name.firstName}</h5>
            <h5>Last Name : {name.lastName}</h5>
        </form>
    </div>
  );
}

export default HookCountThree;
