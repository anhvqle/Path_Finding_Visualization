import React, {Component} from 'react';
import Node from './Node/Node';
import './PathFindingVisualizer.css';
import { directive } from '@babel/types';

export default class PathfindingVisualizer extends Component {
    constructor(props){
        super(props);
        this.state = {
            grid: [], //mouseIsPressed: false,
        };
    }
    componentDidMount(){
        const grid = [];
        for(let row = 0; row < 20; row++){
            const currRow = [];
            for(let col = 0; col < 50; col++){
                currRow.push([]);
            }
            grid.push(currRow);
        }
        this.setState({grid});
    }
    render(){
        const {grid} = this.state;
        console.log(grid)
        return (
            <div> 
                Welcome to Path Finding Visualizer! Hello!
                {grid.map((row, rowIndex) => {
                    return <div>
                        {row.map((node, nodeIndex) => <Node></Node>)}
                    </div>
                })}
            </div>
        );
    }
}

