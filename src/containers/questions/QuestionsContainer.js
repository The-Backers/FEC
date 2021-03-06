
import { connect, dispatch } from 'react-redux';
import fetchQuestions from '../../actions/question/fetchQA/fetchQuestions';
import Questions from '../../components/questions';



var mapStoreToProps = (state) => ({
    questions: state.questionsPart,
});

var mapDispatchToProps = (dispatch) => ({
    getQuestions: () => {
      dispatch(fetchQuestions)
    }

});

var QuestionsContainer = connect(mapStoreToProps, mapDispatchToProps)(Questions);

export default QuestionsContainer;