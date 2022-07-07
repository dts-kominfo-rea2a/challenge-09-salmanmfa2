// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = (propsPerson) => {
    const contactCSS = {
        textAlign:'center',

        
    }
    const containerFlexCSS = {
        display :'flex',
        flexDirection:'row',
        margin:"auto",
        width:"40%",
        border:"2px black",
        backgroundColor:'azure',
    }
    return (
        <>
        <div style={containerFlexCSS}> 
       
        <div style={contactCSS}>
            <div id='data'>
                <h2>{propsPerson.name}</h2>
                <h3>{propsPerson.phone}</h3>
                <h3>{propsPerson.email}</h3>
            </div>

            <img id='image' src={propsPerson.photo} alt=""/>
        </div>
        
        </div>
        </>
    )
}

export default Contact;