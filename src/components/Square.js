import React from 'react'
import Button from '@material-ui/core/Button';



export default function Square(props) {
    return (
        <Button className="square" variant="outlined" color="secondary" onClick={props.onClick}>
            {props.value}
        </Button>
    )
}