import React from 'react'
import "../styles/Widgets.css"
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Widgets = () => {


    const newsArticles =(heading,subtitle)=>(
        <div className="widgets__article">
             <div className="widgets__articleleft">
             <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleright">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
            </div>

        </div>
        
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {
            newsArticles("ratul yo yo yo","something is gone really wrong")
        }
        {
            newsArticles("ratul yo yo yo","something is gone really wrong")
        }
        {
            newsArticles("ratul yo yo yo","something is gone really wrong")
        }
        {
            newsArticles("ratul yo yo yo","something is gone really wrong")
        }{
            newsArticles("ratul yo yo yo","something is gone really wrong")
        }
        {
            newsArticles("ratul yo yo yo","something is gone really wrong")
        }
        </div>
        
    )
}

export default Widgets
