import { Alert } from 'react-bootstrap';
import React from 'react';
import '../componentsCSS/Alert.css';

const ShowAlert=(props)=>{
    return(
        props.alert && <Alert className='alert' key={props.alert.vari} variant={props.alert.vari}>
            {props.alert.msg}
        </Alert>
    );
};

export default ShowAlert;