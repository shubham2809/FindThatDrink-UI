import React, {Component} from 'react';
import {Menu, Input, Icon, Header} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom';

const MenuItemsandColors = [
    {
        label: 'Stores',
        color: 'red',
        icon: 'grid layout',
        exact: false
    }, {
        label: 'Tags',
        color: 'green',
        icon: 'hashtag',
        exact: false
    }, {
        label: 'Top',
        color: 'yellow',
        icon: 'winner',
        exact: false
    }, {
        label: 'Add',
        color: 'teal',
        icon: 'map pin',
        exact: false

    }, {
        label: 'Map',
        color: 'violet',
        icon: 'map',
        exact: false
    }
]

class NavBar extends Component {

    state = {
        activeItem: null
    }

    handleItemClick = (e, {name}) => {
        this.setState({activeItem: name})

    }
    render() {

       const MenuItems =  MenuItemsandColors.map(item => { 
        return (
            <Menu.Item
                key={item.label}
                color={item.color}
                as={NavLink}
                to={ "/" + item.label.toLowerCase()}
                name={item.label}
                active={activeItem === item.label}>
                <Icon name={item.icon}/>
                {item.label}
            </Menu.Item>
       )})

        const activeItem = this.state.activeItem


        return (
            <div>
                <Menu stackable inverted>
                    <Menu.Item>
                        <Header inverted as='h2'>
                            <Icon.Group size='large'>
                                <Icon name='coffee'/> </Icon.Group>
                                    Find that drink </Header>
                                </Menu.Item> 
                                {MenuItems}
                                {/* <Menu.Item as={NavLink} exact to="/" name='Stores' active={activeItem === 'Stores'}>
                                <Icon name='grid layout'/>
                                Stores
                                </Menu.Item> 
                                
                                < Menu.Item as = {NavLink} exact to = "/" name = 'tags' active = {activeItem === 'tags'} > 
                                <Icon name='hashtag'/>
                                Tags </Menu.Item>

                                <Menu.Item as={NavLink} exact to="/" name='Top' active={activeItem === 'Top'}>
                                < Icon name = 'winner' /> 
                                Top </Menu.Item>

                                <Menu.Item as={NavLink} to="/add " name='Add' active={activeItem === 'Add'}>
                                <Icon name = 'map pin' /> 
                                Add </Menu.Item>

                                <Menu.Item as={NavLink} exact to="/" name='Map' active={activeItem === 'Map'}>
                                < Icon name = 'map' /> Map </Menu.Item> */}
                            
                                <Menu.Item>
                                <Input icon='search' size='large' placeholder='Coffee , Beer ...'/> </Menu.Item> 
                                </Menu>
            </div>
            )
        }
    }

    export default NavBar;