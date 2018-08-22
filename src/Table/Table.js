import React, { Component } from 'react';
import { Table, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


export default class TableExample extends Component {
    state = {
        data: [
            {id: 1, a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, link: 'https://reactstrap.github.io/components/button-dropdown/', dropdownOpen: false},
            {id: 2, a: 7, b: 6, c: 5, d: 4, e: 3, f: 2, g: 1, link: 'https://reactstrap.github.io/', dropdownOpen: false},
            {id: 3, a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', link: 'https://help.github.com/', dropdownOpen: false},
            {id: 4, a: 'g', b: 'f', c: 'e', d: 'd', e: 'c', f: 'b', g: 'a', link: 'https://stackoverflow.com/', dropdownOpen: false}
        ]
    };

    toggle = (index) => {
        let newState = {...this.state.data}
        newState[index].dropdownOpen = !newState[index].dropdownOpen
        this.setState({ newState });
    }

    render() { 

        let tables = this.state.data.map((item, i) => {
            let classes = 'b-toggle';

            if (i % 2 !== 0) {
                classes = 'b-toggle b-toggle-white';
            }

            return (
                <tr key={item.id}>
                    <td>{item.a}</td>
                    <td>{item.b}</td>
                    <td>{item.c}</td>
                    <td>{item.d}</td>
                    <td>{item.e}</td>
                    <td>{item.f}</td>
                    <td>{item.g}</td>
                    <td>
                        <ButtonDropdown 
                            direction="left"
                            isOpen={item.dropdownOpen}
                            toggle={() => this.toggle(i)}
                            onMouseDown={e => e.preventDefault()}>
                            <DropdownToggle className={classes}>...</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem><a href={item.link}>Action 1</a></DropdownItem>
                                <DropdownItem onClick={() => console.log(`Test ${item.a}`)}>Action 2</DropdownItem>
                                <DropdownItem onClick={() => console.log(`Test ${item.b}`)}>Action 3</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                    </td>
                </tr>                
            );
        });
    
        return (
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Test</th>
                        <th>Test</th>
                        <th>Test</th>
                        <th>Test</th>
                        <th>Test</th>
                        <th>Test</th>
                        <th>Test</th>
                        <th>Test</th>
                    </tr>
                </thead>
                <tbody>
                    {tables}
                </tbody>
            </Table>
        );
    }
}