import React ,{Component} from 'react'
import { Field, reduxForm  , reset  } from 'redux-form';
import {connect} from 'react-redux';
import {Button, Form, TextArea } from 'semantic-ui-react';
import Checkbox from './Checkbox';
import './Form.css';
import * as actionTypes from '../../store/actions/actionTypes';

class AddForm extends Component {

    submit = values => {
       this.props.onFormSubmit(values)
      }

    name(field) {
       const {meta : {touched , error} , input: {value, ...input}}= field; 
        return (
            <div>
            <Form.Input 
             error={error  && touched }
            label='Name*' 
            placeholder='Name' {...input}
            value={value} 
            />
            <div style={{color:'red'}}>
                 {touched ? error : null}
            </div>
            </div>
        )
    }

    description(field) {
        const {meta : {touched , error} , input: {value, ...input}}= field; 
        return (
            <div>
            <Form.Field
            error={error  && touched }
            id='form-textarea-control-description'
            control={TextArea}
            {...input}
            value={value}
            label='Description*'
            placeholder='Description'
            />
            <div style={{color:'red'}}>
                 {touched ? error : null}
            </div>
            </div>
        )
    }

    checkError(field){
        return(
            <div style={{color:'red'}}>
                 {field.meta.touched ? field.meta.error : null}
            </div>
        )
       
    }

    button(){
        return (
            <Button type='submit'>Submit</Button>
        )
    }



    render() {
        const { handleSubmit } = this.props;
        return (
        <div className="Form">
            <h1>Add Store</h1>
            <Form onSubmit={handleSubmit(this.submit)}>
                <Field label="name" name = "name" component ={this.name}/>
               
                <br></br>
                <Field label="description" name = "description" component ={this.description} />
              
                <br></br>
                <Checkbox label="Wifi" name="wifi" />
                <Checkbox label="Open Late" name="openlate" />
                <Checkbox label="Family Friendly" name="familyfriendly" />
                <Checkbox label="Vegetarian" name="vegetarian" />
                <Checkbox label="Licensed" name="licensed" />
                <Field  name = "checkError" component ={this.checkError}/>
                <br></br>
                <Field label="button" name = "button" component ={this.button}/>
            </Form>
        </div>
        )
    }
}

function validate (values) {
    const errors = {};

    if(!values.name){
        errors.name = "Enter a Name!!!"
    }

    if(!values.description){
        errors.description = "Enter some Description!!!!"
    }

    if(! (values.wifi || values.openlate || values.familyfriendly || values.vegetarian || values.licensed) ){
        errors.checkError = "Please select a tag!!!"
    }

    //if errors is empty the form is fine to submit
    return errors
}

const mapStateToProps = state => {
    return {
        name : state.name,
        descriptiom: state.description,
        tags : state.tags
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFormSubmit: (values) => dispatch({type:actionTypes.SUBMIT_FORM, values : values})
    };
};

AddForm = reduxForm({
    validate,
    form: 'AddForm',
    onSubmitSuccess: (result, dispatch, props) => {
        dispatch(reset('AddForm'))
    }
})(connect(mapStateToProps,mapDispatchToProps)(AddForm));

export default AddForm;