import React from 'react';
import ReactModal from 'react-modal';
import ClickableStars from '../shared/ClickableStars.jsx'

const customStyles = {
  content : {

    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class AddReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false
    }
    this.handleOpenForm = this.handleOpenForm.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
  }

  handleOpenForm() {
    this.setState({ showForm: true });
  }

  handleCloseForm() {
    this.setState({ showForm: false });
  }



  render() {

    return (
      <div>

      <button onClick = {this.handleOpenForm}>Add Review</button>
        <ReactModal
        isOpen={this.state.showForm}
        contentLabel='Add Review From'
        style = {{position: 'relative'}}
      >
        <button style = {{position: 'sticky', top: '0', float: 'right'}} onClick={this.handleCloseForm}>Close</button>
        <h3>Write Your Review</h3>
        <h4>About the {this.props.name}</h4>
        <form id = 'add-review-form' className = 'add-review-form'>

            <ClickableStars id = 'overall-rating' />
            <label htmlFor = 'nickname'>Nickname: </label>
            <input id = 'nickname' type = 'text' required />

        </form>
      </ReactModal>
      </div>
    )
  }


}


export default AddReview;