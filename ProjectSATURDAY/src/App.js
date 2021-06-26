import React,{useState,useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards';
import classNames from 'classnames';
import useStyles from './styles.js';
const alankey='6b0b503ca3e5de0f0abd8f2769d760e22e956eca572e1d8b807a3e2338fdd0dc/stage';
const App=()=>{

    const[newsArticles, setNewsArticles]=useState([]);
    const[activeArticle, setActiveArticle]=useState(0);
    const classes= useStyles();

    useEffect(()=>{
        alanBtn({
            key: alankey,
            onCommand:({command, articles}) => {
                if(command ==='newHeadlines'){
                    setNewsArticles(articles);
                }
                else if(command ==='highlight'){
                    setActiveArticle((prevActiveArticle)=> prevActiveArticle +1);
                }
            }
        })
    },[])
    return (
        <div>
            <div className={classes.logoContainer}>
                <img src="https://vtlogo.com/wp-content/uploads/2020/10/jarvis-network-vector-logo.png" className={classNames.alanlogo} alt="jarvis logo"/>

            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
        </div>
    );
}


export default App;
