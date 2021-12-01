import React, {useState} from "react";
import './App.css'

function Dog() {
    const [url, setUrl] = useState('')
    function fetch_data(){
        fetch('https://api.thedogapi.com/v1/images/search').then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error('Request failed. Try again');
        }, networkError => console.log(networkError.message)).then(jsonRes =>{
            setUrl(jsonRes[0].url)
        })
    }
    return (
        <div className="row">
            <div className="column">
                <img src={url} alt="Here's a cute dog to cure your blues :)" className='dog_img' />
                <button className='dog_btn' onClick={fetch_data}>Enjoy another dog image!</button>
            </div>
        </div>
    )
}

export default Dog