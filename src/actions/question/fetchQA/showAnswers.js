var showAnswers = (answers) => {
  console.log('those are answers', answers)
  return {
  type: 'SHOW_ANSWER',
  payload: answers
}}


export default showAnswers;