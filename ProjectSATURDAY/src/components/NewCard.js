import React,{useState, useEffect, createRef} from 'react';

import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button,Typography } from '@material-ui/core';
import classNames from 'classnames';
import useStyles from './styles.js'


const NewsCard = ({article: {description,publishedAt, source, title, url, urlToImage }, i, activeArticle}) => {

    const classes = useStyles();
   

    
    return (
       <Card className={classNames(classes.card, activeArticle===i? classes.activeCard:null)}>
           <CardActionArea href={url} target="_blank">
               <CardMedia className={classes.media } image= {urlToImage || 'https://www.indiafellow.org/blog/wp-content/uploads/2020/05/Marketplace-Lending-News.jpg'} />
               <div className={classes.details}>
                   <Typography variant ="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString( )}</Typography>
                   <Typography variant ="body2" color="textSecondary" component="h2">{source.name}</Typography>
               </div>
               <Typography classname={classes.title} gutterBottom variant="h5">{title}</Typography>
               <CardContent>
                   <Typography variant ="body2" color="textSecondary" component="p">{description}</Typography>
               </CardContent>
           </CardActionArea>
           <CardActions className={classes.CardActions}>
               <Button size="small" color = "primary">Learn More</Button>
               <Typography variant ="h5" color="textSecondary">{i + 1}</Typography>
           </CardActions>
       </Card>
    )
}

export default NewsCard;
