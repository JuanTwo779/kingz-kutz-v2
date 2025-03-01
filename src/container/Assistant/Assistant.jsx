import React, { useState } from 'react'
import axios from 'axios'

const Assistant = () => {
    
    const [file, setFile] = useState(null)
    const [message, setMessage] = useState("")

    const onFileChange = (event) => {
        setFile(event.target.files[0])
    }

    const submit = async () =>{
        // send file to backend using axios
        if (!file){
            setMessage("Please select a file first")
            return
        }

        const formData = new FormData()
        formData.append("file", file)

        try {
            const response = await axios.post("http://127.0.0.1:5000/predict", formData, {
                headers: {
                    "Content-Type":"multipart/form-data",
                },
            })
            
            if(response.data.success){
                setMessage(response.data.success);
            } else if (response.data.error) {
                setMessage(response.data.error);
            }
            console.log(response)
        } catch (error) {
            if(error.response){
                setMessage(error.response.data.message)
            } else if (error.request) {
                setMessage("No response from server. Please try again.");
            } else {
                setMessage("Unexpected error occurred. Please try again.");
            }
            console.error(error)
        }
    }

    return (
        <div>
            <h1>Upload Image</h1>
            <div>
                <input type="file" onChange={onFileChange}/>
                <button onClick={submit}>Upload</button>
                {message && <p>{message}</p>}
            </div>
        </div>
    )
}

export default Assistant