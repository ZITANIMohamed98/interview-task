import React, {useState, useEffect} from 'react';
import './index.css'
import axios from 'axios'

const Tree = () => {
    return (
            <div className="tree">

                <ul className='main'>
                    <li>1. root</li>
                    <ul className='node'>
                            <li>1.1. ant</li>
                    </ul>
                    <ul className='node'>
                            <li>1.2. bear</li>
                            <ul className='node'>
                                    <li>1.2.1. cat</li>
                                    <li>1.2.2. dog</li>
                                    <ul className='node'>
                                        <li>1.2.2.1. elephant</li>
                                    </ul>
                            </ul>
                    </ul>
                    <ul className='node'>
                            <li>1.3. frog</li>
                    </ul>
                </ul>
            </div>
    )
}

export default Tree;
