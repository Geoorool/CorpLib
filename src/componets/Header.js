import React, {Component}from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'; 

const StyledButton = styled(Button)`
 && {
   margin-bottom: 15px;
  }
  `;

class Header extends Component {
    state = {
        router: 'bookList',
        id: 0
      }

    render() {
        //TODO: Сделать AppBar
        return(
            <>
                <StyledButton onClick={() => { this.props.updateData(this.state)}}>Библиотека</StyledButton>
            </>
        )
    }
}

export default Header;