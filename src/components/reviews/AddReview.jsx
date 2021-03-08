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
      showForm: false,
      files: [],
      characteristics: {
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
    this.handlePhoto = this.handlePhoto.bind(this);
  }

  handleOpenForm() {
    this.setState({ showForm: true });
  }

  handleCloseForm() {
    this.setState({ showForm: false });
  }

  handlePhoto(event) {

    var reader = new FileReader();
    var parent = this;
    var file = event.target.files[0];
    console.log(event.target.files[0])



    reader.addEventListener("load", function () {
      // convert image file to base64 string
    var x = parent.state.files;
    x.push(reader.result);
    parent.setState({files: x});
    }, false);

    if (file) {
      reader.readAsDataURL(file);
      console.log(reader.result)
    }


      // for (let i = 0; i < files.length; i++) {
      //   const file = files[i];

      //   if (!file.type.startsWith('image/')){ continue }

      //   const img = document.createElement("img");
      //   img.classList.add("obj");
      //   img.file = file;
      //   preview.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.

      //   const reader = new FileReader();
      //   reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
      //   reader.readAsDataURL(file);
      // }

  }






  render() {

    var characteristics = [];
    (() => {

      if (this.props.characteristics) {
        Object.keys(this.props.characteristics).map((element) => {

            characteristics.push( (
              <div className = 'characteristic-radio' style ={{display: 'grid'}}>
                <br></br>
                <p>{element}:</p>
                <label htmlFor = {`${element}-1`} >1: {this.state.characteristics[element]['1']}</label>
                <input id = {`${element}-1`} type = 'radio' name = {element} value = '1' required></input>

                <label htmlFor = {`${element}-2`} >2: {this.state.characteristics[element]['2']}</label>
                <input id = {`${element}-2`} type = 'radio' name = {element} value = '2' required></input>

                <label htmlFor = {`${element}-3`} >3: {this.state.characteristics[element]['3']}</label>
                <input id = {`${element}-3`} type = 'radio' name = {element} value = '3' required></input>

                <label htmlFor = {`${element}-4`} >4: {this.state.characteristics[element]['4']}</label>
                <input id = {`${element}-4`} type = 'radio' name = {element} value = '4' required></input>

                <label htmlFor = {`${element}-5`} >5: {this.state.characteristics[element]['5']}</label>
                <input id = {`${element}-5`} type = 'radio' name = {element} value = '5' required></input>

              </div>
            ))
        })
      }
    })()

    var previewPhotos = this.state.files.map((element) => {
      return (
        <img src = {element} height = '200' alt = 'image preview' />
      )
    })


    return (
      <div className = 'add-review'>

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
            <label htmlFor = 'overall-rating'>Overall Rating:</label>
            <ClickableStars id = 'overall-rating' required/>

            <p>Do you recommend this product?</p>

              <input type = 'radio' id='recommend' name = 'recommend' value = 'true' required></input>
              <label htmlFor = 'recommend'>Yes</label>
              <input type = 'radio' id='no-recommend' name = 'recommend'  value = 'false'></input>
              <label htmlFor = 'no-recommend'>No</label>


            <br></br>

            <div>

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

            <label htmlFor = 'add-review-summary'>Summary: </label>
            <input id = 'add-review-summary' defaultValue = 'Example: Best purchase ever!' type = 'text'/>

            <br></br>

            <label htmlFor = 'add-review-body'>Review Body: </label>
            <input id = 'add-review-body' type = 'text' maxLength = '1000' minLength = '50' defaultValue = 'Why did you like the product or not?'  required />

            <br></br>

            <input type = 'file' onChange = {this.handlePhoto}  multiple/>
            {previewPhotos}


            <br></br>

            <label htmlFor = 'add-review-nickname'>Nickname: </label>
            <input id = 'add-review-nickname' type = 'text' required />

        </form>
      </ReactModal>
      </div>
    )
  }


}


export default AddReview;

// return (
//   <div>
//     <p>{element}</p>
//     <input id = {`${element}-1`} type = 'radio' name = {element} value = '1' required></input>
//     <label htmlFor = {`${element}-1`} >{this.state.characteristics[element]['1']}</label>

//     <input id = {`${element}-2`} type = 'radio' name = {element} value = '2' required></input>
//     <label htmlFor = {`${element}-2`} >{this.state.characteristics[element]['2']}</label>

//     <input id = {`${element}-3`} type = 'radio' name = {element} value = '3' required></input>
//     <label htmlFor = {`${element}-3`} >{this.state.characteristics[element]['3']}</label>

//     <input id = {`${element}-4`} type = 'radio' name = {element} value = '4' required></input>
//     <label htmlFor = {`${element}-4`} >{this.state.characteristics[element]['4']}</label>

//     <input id = {`${element}-5`} type = 'radio' name = {element} value = '5' required></input>
//     <label htmlFor = {`${element}-5`} >{this.state.characteristics[element]['5']}</label>
//   </div>
// )