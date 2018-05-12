import React from 'react';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import FlatButton from 'material-ui/FlatButton';


const styles = {
    propContainer: {
        width: 200,
        overflow: 'hidden',
        margin: '20px auto 0',
    },
    propToggleHeader: {
        margin: '20px auto 10px',
    },
};


class Crud extends React.Component {

    constructor(){
        super()
        this.state = {
            tableData: [
                {
                    name: 'Azir',
                },
                {
                    name: 'Nasus',
                },
            ]
        }
    }

    teste() {
        console.log('----')
        console.log(this)
        console.log(this.state.tableData)
        
        const tableDataAux = this.state.tableData;
        tableDataAux.push({name: 'A'})
        this.setState({tableData:tableDataAux});
    }
    

    render() {
        return (
            <MuiThemeProvider>

                <div>
                    <Table
                    >
                        <TableHeader
                        >
                            <TableRow>
                                <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{ textAlign: 'center' }}>
                                    Super Header
                  </TableHeaderColumn>
                            </TableRow>
                            <TableRow>
                                <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody
                        >
                            {this.state.tableData.map((row, index) => (
                                <TableRow key={index}>
                                    <TableRowColumn>{row.name}</TableRowColumn>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <FlatButton label="Default" onClick={this.teste.bind(this)}/>

                </div>

            </MuiThemeProvider>
        );
    }
}
export default Crud