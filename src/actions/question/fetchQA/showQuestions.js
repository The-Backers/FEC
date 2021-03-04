var showQuestions = (questions) => {
  console.log('those are questions', questions)
  return {
  type: 'SHOW_QUESTIONS',
  payload: questions
}}


export default showQuestions;