import React, {useState, useEffect} from 'react';
import './index.css'
import axios from 'axios'
import data from './data.json'

axios.defaults.headers['X-ACCESS-KEY'] = '$2b$10$1/cOdqbhtM65Fc4reBh/NuXL4Yg1nrtaP4SYViPlX8q2LTdUtNA8a';




const TreeContent = () => {
    const [currData, setCurrData] = useState(data);
    const [value, setvalue] = useState("");
    const [Item, setItem] = useState(0);

    // const postApi = () => {
    //     axios.post('https://api.jsonbin.io/v3/b/64e3be2e9d312622a394a081',currData)
    //     .then((response) => {
    //     console.log(response.data.record);})
    // }
    const addItem = (value,Item) => {
        let newArry = { ...currData }; // Create a copy of the data
        if(Item.length===1){
            newArry.items[Item].subitems.push({ "name": "", "subitems": [] });
            newArry.items[Item].subitems[newArry.items[0].subitems.length-1].name = value;
        }else if(Item.length===2){
            newArry.items[Item[0]].subitems[Item[1]].subitems.push({ "name": "", "subitems": [] });
            newArry.items[Item[0]].subitems[Item[1]].subitems[newArry.items[Item[0]].subitems[Item[1]].subitems.length-1].name = value;
        }
        else if(Item.length===3){
            newArry.items[Item[0]].subitems[Item[1]].subitems[Item[2]].subitems.push({ "name": "", "subitems": [] });
            newArry.items[Item[0]].subitems[Item[1]].subitems[Item[2]].subitems[newArry.items[Item[0]].subitems[Item[1]].subitems[Item[2]].subitems.length-1].name = value;
        }
        setCurrData(newArry);
        // postApi();
    };

    const deleteItem = (event) => {
        let itemToDelete = event.target.id.split("_");
        let newArry = { ...currData }; // Create a copy of the data
        if(itemToDelete.length===2){
            newArry.items[itemToDelete[0]].subitems.splice(itemToDelete[1],1);
        }
        else if(itemToDelete.length===3){
            newArry.items[itemToDelete[0]].subitems[itemToDelete[1]].subitems.splice(itemToDelete[2],1);    }
        else if(itemToDelete.length===4){
                newArry.items[itemToDelete[0]].subitems[itemToDelete[1]].subitems[itemToDelete[2]].subitems.splice(itemToDelete[3],1);    }
        setCurrData(newArry);
        // postApi();
    }

    const handleChange = (event) => {
        setvalue(event.target.value);
        setItem(event.target.id.split("_"));
      };
    
      const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          // 👇 Get input value
          addItem(value,Item);
          // Clear input field after adding an item to treeview
          event.target.value="";
        }
      };

    useEffect(() => {
        // axios.get('https://api.jsonbin.io/v3/b/64e3be2e9d312622a394a081')
        // .then((response) => {
        // setCurrData(response.data.record);})
    }, [currData]); // Add currData as a dependency

    return (
        <ul className="main">
            
            {currData.items.map((item, i) => (
                <React.Fragment key={i}>
                    <li>{(i + 1) + ". " + item.name}</li>
                    <input
                        type="text"
                        id={i}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown} />
                    <ul>
                        {item.subitems.map((subitem, j) => (
                            <React.Fragment key={j}>
                                <div className='node'><li >{(i + 1) + "." + (j + 1) + ". " + subitem.name}</li><button id={i + '_' + j} onClick={deleteItem}>❌</button></div>
                                <input
                                    type="text"
                                    id={i+"_"+j}
                                    onChange={handleChange}
                                    onKeyDown={handleKeyDown} />
                                <ul>
                                    {subitem.subitems.map((subsubitem, k) => (
                                        <React.Fragment key={k}>
                                            <div className='node'><li >{(i + 1) + "." + (j + 1) + "." + (k + 1) + ". " + subsubitem.name}</li><button id={i + '_' + j + '_' + k} onClick={deleteItem}>❌</button></div>
                                            <input
                                                type="text"
                                                id={i+"_"+j+"_"+k}
                                                onChange={handleChange}
                                                onKeyDown={handleKeyDown} />
                                            <ul>
                                                {subsubitem.subitems.map((subsubsubitem, h) => (
                                                   <div className='node'> <li key={h} >{(i + 1) + "." + (j + 1) + "." + (k + 1) + "." + (h + 1) + '. ' + subsubsubitem.name}</li><button id={i + '_' + j + '_' + k + '_' + h} onClick={deleteItem}>❌</button></div>
                                                ))}
                                            </ul>
                                        </React.Fragment>
                                    ))}
                                </ul>
                            </React.Fragment>
                        ))}
                    </ul>
                </React.Fragment>
            ))}
        </ul>
    );
};

const Tree = () => {
    return (
            <div className="tree">
                <div className='menu'>
                    <select
                    onChange={() => {}}
                    value=""
                    >
                        <option disabled>Sort by</option>
                        <option>Original content</option>
                        <option>Alphabetic Order</option>
                    </select>

                </div>
                <TreeContent />
            </div>
    )
}

export default Tree;
