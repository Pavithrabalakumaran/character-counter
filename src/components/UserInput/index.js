import {UserInputItem, UserInputDetails} from './styledComponents'

const userInput = props => {
  const {userInputDetails} = props
  const {userEnteredInput, userEnteredTextLength} = userInputDetails

  return (
    <UserInputItem>
      <UserInputDetails>
        {userEnteredInput} : {userEnteredTextLength}
      </UserInputDetails>
    </UserInputItem>
  )
}

export default userInput
