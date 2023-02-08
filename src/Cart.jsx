import {useState, useEffect} from 'react'
import { Button, TextField, List, ListItem, Typography} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

export default function Cart() {
    const [input, setInput] = useState("")
    const [list, setList] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        return computeTotal()
    },[list])

    function handleAddOnClick() {
        const newItem = {
        itemName : input,
        quantity : 1,
        isSelected : false
        }
        // console.log(newItem)
        const newItems = [...list, newItem]
        setList(newItems)
        setInput('')
    }
    

    const handleIncrement = (index) => {
        const incrementItem = [...list]
        // Increase quantity by 1
        incrementItem[index].quantity++
        setList(incrementItem)
    }

    const handleDecrement = (index) => {
        const decrementItem = [...list]
        // Decrease quantity by 1
        decrementItem[index].quantity--
        setList(decrementItem)
    }

    const handleComplete = (index) => {
        const itemTarget = [...list]
        itemTarget[index].isComplete = 
        setList(itemTarget)
    }

    const computeTotal = () => {
        const calculateTotal = list.reduce((total, item) => {
        return total + item.quantity
        }, 0)
        setTotal(calculateTotal)
    }
    return(
        <>
            {/* <input type="text" onChange={(e) => setInput(e.target.value)} value={input}/> */}
            <div className='card-title'>
                <Typography variant="h3">
                    Sample
                </Typography>
            </div>
            <TextField autoFocus="true" label="Add Item" size="small" variant="outlined" onChange={(e) => setInput(e.target.value)} value={input}></TextField>

            <Button variant="contained" size="large" color="secondary" onClick={() => handleAddOnClick()}><AddIcon /></Button>
            <List>
                {list.map((item, index) => (
                <ListItem alignItems='right'>
                    <input type="checkbox" onChange={() => handleComplete(index)}></input>
                    {item.itemName} <Button onClick={() => handleDecrement(index)}>-</Button> {item.quantity} <Button onClick={() => handleIncrement(index)}>+</Button>
                </ListItem>
                ))}
                <ListItem>
                    Total: {total}
                </ListItem>
            </List>
        </>
    )
}