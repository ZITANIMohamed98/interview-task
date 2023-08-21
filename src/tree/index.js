import React, {useState, useEffect} from 'react';
import './index.css'
import axios from 'axios'
import data from './data.json'


const TreeContent = () => {
    const [currData, setCurrData] = useState(data);
    
    return (
        <ul className="main">
            
            {!currData.items.length==0 && currData.items.map((item, i) => (
                <React.Fragment key={i}>
                    <li>{(i + 1) + ". " + item.name}</li>
                        <ul>
                        {item.subitems.map((subitem, j) => (
                            <React.Fragment key={j}>
                                <div className='node'><li >{(i + 1) + "." + (j + 1) + ". " + subitem.name[0].repeat(i+1)+subitem.name}</li></div>
                                
                                <ul>
                                    {subitem.subitems.map((subsubitem, k) => (
                                        <React.Fragment key={k}>
                                            <div className='node'><li >{(i + 1) + "." + (j + 1) + "." + (k + 1) + ". " + subsubitem.name[0].repeat(i+2)+subsubitem.name}</li></div>
                                            
                                            <ul>
                                                {subsubitem.subitems.map((subsubsubitem, h) => (
                                                   <div className='node'> <li key={h} >{(i + 1) + "." + (j + 1) + "." + (k + 1) + "." + (h + 1) + '. ' + subsubsubitem.name[0].repeat(i+3)+subsubsubitem.name}</li></div>
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
                <TreeContent />
            </div>
    )
}

export default Tree;
