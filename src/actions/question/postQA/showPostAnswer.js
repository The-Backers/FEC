var showPostAnswer = (answer) => {
  console.log('those are showPostAnswer', answer)
  return {
  type: 'SHOW_QUESTIONS',
  payload: questions
}}


export default showPostAnswer;