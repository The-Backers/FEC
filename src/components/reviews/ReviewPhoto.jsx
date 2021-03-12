import React from 'react';
import ReactModal from 'react-modal';
import logInteraction from '../shared/logInteraction.js';

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

class ReviewPhoto extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      showPhoto: false
    }
    this.handleOpenPhoto = this.handleOpenPhoto.bind(this);
   this.handleClosePhoto = this.handleClosePhoto.bind(this);
   this.clickLogger = this.clickLogger.bind(this);
  }


  clickLogger(name,input) {
    logInteraction(`${name}: ${input}`, 'reviews');
  }


  handleOpenPhoto () {
    ReactModal.setAppElement('#app');
    this.clickLogger('open-review-photo', this.props.id);
    this.setState({ showPhoto: true });
  }

  handleClosePhoto () {
    this.clickLogger('close-review-photo', this.props.id);
    this.setState({ showPhoto: false });
  }

  render() {

    return(
      <div>
      <img id = {this.props.id} alt = 'review photo' src = {this.props.url} onClick={this.handleOpenPhoto} style = {{width: '5vw', height: '5vw'}} />
      <ReactModal
         isOpen={this.state.showPhoto}
         contentLabel="Review Photo"
         onRequestClose = {this.handleClosePhoto}
         style = {{position: 'relative'}}
      >
        <button style = {{position: 'sticky', top: '0', left: '0'}} onClick={this.handleClosePhoto}>Close</button>
        <br></br>
        <img alt = 'review-photo' src = {this.props.url} />
      </ReactModal>
    </div>

    )

  }

}



export default ReviewPhoto