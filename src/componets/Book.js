import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = () => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      margin: 'auto',
      //width: 600,
    },
    image: {
      width: 300,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  });

class Book extends Component{
    render() {
        
        const {book} = this.props;
        const {classes} = this.props;

        return(
            <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                {/* <img className={classes.img} alt="complex" src={require(`${book.imgSrc}`)} /> */}
                <img className={classes.img} alt="complex" src={require(`../../img${book.imgSrc}`)} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {book.title}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {book.author}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {book.description}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
        )
    }
}

export default withStyles(styles)(Book);