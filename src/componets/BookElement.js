import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'; 

const StyledCard = styled(Card)`
 && {
   margin: 10px;
   width: 250px;
   min-height: 400px;
   display: flex;
   flex-direction: column;
  }
  `;


  const styles = () => ({
    media: {
        height: 340
    },
  });

class BookElement extends Component {
    state = {
        router: 'book',
        id: this.props.book.id
      }

    render() {
        const {classes} = this.props;
        const {book} = this.props;
        return (
            <>
                <StyledCard>
                    <CardActionArea onClick={() => { 
                        this.props.updateData(this.state)
                        }}>
                        <CardMedia 
                        className={classes.media}
                        image={require(`../../img${book.imgSrc}`)}
                        title={book.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h7" component="h3">
                                {book.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {book.author}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </StyledCard> 
            </>      
        )
    }
}

export default withStyles(styles)(BookElement);