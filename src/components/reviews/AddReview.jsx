import React from 'react';
import ReactModal from 'react-modal';
import ClickableStars from '../shared/ClickableStars.jsx';
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

class AddReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false,
      body: 'Why did you like the product or not?',
      email: 'Example: jackson11@email.com',
      nickname: 'Example: jackson11!',
      summary: 'Example: Best purchase ever!',
      photos: [],
      characteristics: {},
      characteristicLabels: {
        Size: {
          1: 'A size too small',
          2: '1/2 a size too small',
          3: 'Perfect',
          4: '1/2 a size too big',
          5: 'A size too wide'
        },
        Width: {
          1: 'Too narrow',
          2: 'Slightly narrow',
          3: 'Perfect',
          4: 'Slightly wide',
          5: 'Too wide'
        },
        Comfort: {
          1: 'Uncomfortable',
          2: 'Slightly Uncomfortable',
          3: 'Okay',
          4: 'Comfortable',
          5: 'Perfect'
        },
        Quality: {
          1: 'Poor',
          2: 'Below average',
          3: 'What I expected',
          4: 'Pretty great',
          5: 'Perfect'
        },
        Length: {
          1: 'Runs short',
          2: 'Runs slightly short',
          3: 'Perfect',
          4: 'Runs slightly long',
          5: 'Runs long'
        },
        Fit: {
          1: 'Runs tight',
          2: 'Runs slightly tight',
          3: 'Perfect',
          4: 'Runs slightly long',
          5: 'Runs long'
        }

      }
    }
    this.handleOpenForm = this.handleOpenForm.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleRecommendChange = this.handleRecommendChange.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSummaryChange = this.handleSummaryChange.bind(this);
    this.handleNicknameChange = this.handleNicknameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleCharacteristicChange = this.handleCharacteristicChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clickLogger = this.clickLogger.bind(this);

  }


clickLogger(name,input) {
  logInteraction(`${name}: ${input}`, 'reviews');
}


  handleOpenForm() {
    this.clickLogger('open-add-review-form', this.props.id);
    ReactModal.setAppElement('#app');
    this.setState({ showForm: true });
  }

  handleCloseForm() {
    this.clickLogger('close-add-review-form', this.props.id);
    this.setState({ showForm: false });
  }

  handleRatingChange(event) {

    this.clickLogger('set-review-rating', this.props.id);
    this.setState({rating: event});
  }

  handleRecommendChange(event) {
    this.clickLogger('set-review-recommend', this.props.id);
    if (event.target.value === 'true') {
      var x = true;
    } else {
      var x = false;
    }

    console.log(typeof x, x)
    this.setState({recommend: x})
  }

  handleBodyChange(event) {

    this.setState({body: event.target.value});
  }

  handleSummaryChange(event) {
    this.setState({summary: event.target.value});
  }
  handleNicknameChange(event) {
    this.setState({nickname: event.target.value});
  }
  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handleCharacteristicChange(event, element) {
    this.clickLogger('set-review-characteristic', this.props.id);
    var x = this.state.characteristics;

    x[this.props.characteristics[element].id] =  parseInt(event.target.value);

    this.setState({characteristics: x});


  }

  handlePhoto(event) {
    this.clickLogger('set-review-photo', this.props.id);
    var reader = new FileReader();
    var parent = this;
    var file = event.target.files[0];


    reader.addEventListener("load", function () {
      // convert image file to base64 string
    var x = parent.state.photos;
    x.push(reader.result);
    parent.setState({photos: x});
    }, false);

    if (file) {
      reader.readAsDataURL(file);

    }

  }


handleSubmit(event) {
    event.preventDefault();
     this.clickLogger('submit-new-review', this.props.id);
  var text = document.getElementById('add-review-body').value
  if (text.length < 50) {
    alert ('Please use the minimum required characters');
  } else {
    var state = this.state

    console.log(this.props.id, this.props.length, this.props.sort, state.rating, state.summary, state.body, state.recommend, state.nickname, state.email, state.photos, state.characteristics)
    this.props.add(this.props.id, this.props.length, this.props.sort, state.rating, state.summary, state.body, state.recommend, state.nickname, state.email, state.photos, state.characteristics)

  }






  // console.log(elements);
}



  render() {

    var characteristics = [];
    (() => {

      if (this.props.characteristics) {
        Object.keys(this.props.characteristics).map((element) => {

            characteristics.push( (
              <div className = 'characteristic-radio' style ={{display: 'grid'}}>
                <br></br>
                <p>{element}*: </p>
                <label htmlFor = {`${element}-1`} >  1: {this.state.characteristicLabels[element]['1']}</label>
                <input id = {`${element}-1`} onChange = {(event) => {this.handleCharacteristicChange(event, element)}} type = 'radio'  name = {element} value = {1} required></input>

                <label htmlFor = {`${element}-2`} >2: {this.state.characteristicLabels[element]['2']}</label>
                <input id = {`${element}-2`} onChange = {(event) => {this.handleCharacteristicChange(event, element)}} type = 'radio' name = {element} value = {2} required></input>

                <label htmlFor = {`${element}-3`} >3: {this.state.characteristicLabels[element]['3']}</label>
                <input id = {`${element}-3`} onChange = {(event) => {this.handleCharacteristicChange(event, element)}} type = 'radio' name = {element} value = {3} required></input>

                <label htmlFor = {`${element}-4`} >4: {this.state.characteristicLabels[element]['4']}</label>
                <input id = {`${element}-4`} onChange = {(event) => {this.handleCharacteristicChange(event, element)}} type = 'radio' name = {element} value = {4} required></input>

                <label htmlFor = {`${element}-5`} >5: {this.state.characteristicLabels[element]['5']}</label>
                <input id = {`${element}-5`} onChange = {(event) => {this.handleCharacteristicChange(event, element)}} type = 'radio' name = {element} value = {5} required></input>

              </div>
            ))
        })
      }
    })()

    var previewPhotos = this.state.photos.map((element) => {
      return (
        <img src = {element} height = '200' alt = 'image preview' />
      )
    })

    var minCharLabel;
    if (50 - this.state.body.length > 0) {
      minCharLabel = <label htmlFor ='add-review-body'>Minimum Required Characters Left [{50 - this.state.body.length}]</label>
    } else {
      minCharLabel = <label htmlFor ='add-review-body'>Minimum Reached</label>
    }

    var display;
    if (this.state.photos.length >= 5) {
      display = 'none';
    }



    return (
      <div className = 'add-review'>

      <button className = 'add-review-button' onClick = {this.handleOpenForm}>Write Your Review</button>
        <ReactModal
        isOpen={this.state.showForm}
        contentLabel='Add Review From'
        style = {{position: 'relative'}}
        onRequestClose = {this.handleCloseForm}
      >
        <button style = {{position: 'sticky', top: '0', float: 'right'}} onClick={this.handleCloseForm}>Close</button>
        <div className = 'add-review-head'>
          <h3>Write Your Review</h3>
          <h4>About the {this.props.name}</h4>
          <h5>* = required</h5>
        </div>
        <form id = 'add-review-form' className = 'add-review-form' onSubmit = {this.handleSubmit}>
            <label htmlFor = 'overall-rating'>Overall Rating:</label>
            <ClickableStars id = 'overall-rating' rating = {this.handleRatingChange} required/>

            <p>Do you recommend this product?*</p>

              <input type = 'radio' id='recommend' name = 'recommend' value = {true}  onChange = {this.handleRecommendChange} required></input>
              <label htmlFor = 'recommend'>Yes</label>
              <input type = 'radio' id='no-recommend' name = 'recommend'  value = {false} onChange = {this.handleRecommendChange}></input>
              <label htmlFor = 'no-recommend'>No</label>


            <br></br>

            <span>Characteristics:</span>
            <div className = 'characteristics-parent'>

            {characteristics.map((element) => element)}
            {/* {
              if (this.props.characteristics) {
                Object.keys(this.props.characteristics).map((element) => {
                  console.log(element)
                  return (<div>
                    <p>hi</p> </div>)
                })
              }

            } */}
            </div>



            <span htmlFor = 'add-review-summary'>Summary: </span>
            <br></br>
            <input id = 'add-review-summary' ariaLabel = 'Add review summary' name = 'add-review-summary' maxLength = '60' onClick = {() => {this.clickLogger('set-review-summary', this.props.id)}}  value = {this.state.summary} onChange = {this.handleSummaryChange} type = 'text'/>

            <br></br>

            <div className = 'body-input'>
              <span htmlFor = 'add-review-body'>Review Body*: </span>
              <br></br>
              <textarea form = 'add-review-form' ariaLabel = 'Add review body'  id = 'add-review-body' name = 'add-review-body' type = 'text' maxLength = '1000' minLength = '50' onClick = {() => {this.clickLogger('set-review-body', this.props.id)}} onChange = {this.handleBodyChange} value = {this.state.body}  required ></textarea>
              <br></br>
             {minCharLabel}
            </div>

            <br></br>

            <div className = 'photos-input'>
              <span htmlFor = 'add-review-photos' >Upload Photos (Maximum 5): </span>
              <br></br>
              <input type = 'file' id = 'add-review-photos' ariaLabel = 'Add review photo' name = 'add-review-photos' onChange = {this.handlePhoto} style = {{display: display}}  />
              {previewPhotos}
            </div>


            <br></br>

            <div className = 'nickname-input'>
              <span htmlFor = 'add-review-nickname'>Nickname*: </span>
              <br></br>
              <input ariaLabel = 'Add review nickname' id = 'add-review-nickname' name = 'add-review-nickname' maxLength = '60' type = 'text' value = {this.state.nickname} onClick = {() => {this.clickLogger('set-review-nickname', this.props.id)}} onChange = {this.handleNicknameChange} required />
              <br></br>
              <span htmlFor = 'add-review-nickname'>For privacy reasons, do not use your full name or email address.</span>
            </div>

            <br></br>

            <div className = 'email-input'>
              <span htmlFor = 'add-review-email'>Email*: </span>
              <br></br>
              <input ariaLabel = 'Add review email' id = 'add-review-email' name = 'add-review-email' maxLength = '60' type = 'email' value = {this.state.email} onClick = {() => {this.clickLogger('set-review-email', this.props.id)}} onChange = {this.handleEmailChange} required />
              <br></br>
              <span htmlFor = 'add-review-email'>For authentication reasons, you will not be emailed</span>
            </div>

            <br></br>

            <input ariaLabel = 'submit new review' type = 'submit' />

        </form>
      </ReactModal>
      </div>
    )
  }


}


export default AddReview;

