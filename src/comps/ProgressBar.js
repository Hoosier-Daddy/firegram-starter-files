import React from 'react';
import useStorage from "../hooks/useStorage";

const ProgressBar = ({file})=>{

    const {progress,url} = useStorage(file);
    console.log(progress ,url);

        return (
            <div>
                Progress Bar
            </div>
        )
}


export default ProgressBar;