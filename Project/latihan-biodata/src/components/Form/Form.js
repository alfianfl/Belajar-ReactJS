import React from 'react'

const Form = (props) => (
    <form onSubmit={props.onSubmitForm}>
        <div className="form-group">
        <label>First Name</label>
        <input 
            type="text" 
            className="form-control input-value"
            name="first_name"
            value={props.first_name}
            onChange={props.onChange}
        />
        </div>
        
        <div className="form-group">
        <label>Last Name</label>
        <input 
            type="text" 
            className="form-control input-value"
            name="last_name"
            value={props.last_name} 
            onChange={props.onChange}
        />
        </div>
        <button 
            type="submit" 
            className="btn btn-primary mt-3 mb-3"
            disabled={props.buttonDisabled}
        >
            Submit
        </button>
    </form>
)

export default Form