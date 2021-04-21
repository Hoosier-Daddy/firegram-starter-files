import React, { useState } from 'react';
import ProgressBar from './ProgressBar';


let UploadForm = ()=>{

    const [file,setFile] = useState(null);
    const [error,setError] = useState(null);
    const type = ['image/png','image/jpeg'];

    function changeHandler(e){
        let selected = e.target.files[0];
        console.table(selected);
        if(selected && type.includes(selected.type)){
            setFile(selected);
            setError(null);
        }else{
            setError("please select an image file (png or jpg)");
            setFile(null);
        }
    }
    return (
        <div>
            <form>
                <label>
                <input type="file" onChange ={changeHandler}/>
                <span>+</span>
                </label>
            </form>

            <div className="output">
                {file && <div>{file.name}</div>}
                {error && <div>{error}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>

        </div>
        
    );
}

export default UploadForm;