import React from 'react'

import CircularProgress from "@material-ui/core/CircularProgress";

const Progress = () => {
    return (
        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
            <CircularProgress />
        </div>
    )
}
export default Progress
