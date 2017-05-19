import React from 'react'
import PropTypes from 'prop-types'

export default class Item extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            check:false,
        };
        this.click=this.click.bind(this);
    }
    click(){
       this.setState({check:true});
    }
    render(){
        const text=this.state.check?'yes':'no';
        return(<div onClick={this.click}>{this.props.name} : <b>{text}</b></div>)
    }

}

Item.defaultProps={
    name:"default comment",
};

Item.propTypes={
    name:React.PropTypes.string.isRequired,
};
