import {Component} from 'react'
import {v4} from 'uuid'
import UserInput from '../UserInput'

import {
  BgContainer,
  LeftPanel,
  InfoCardTop,
  Info,
  userInputListItem,
  CounterHeading,
  RightPanel,
  EmptyImage,
  AddInputContainer,
  Input,
  AddInputButton,
} from './styledComponents'

class CharacterCounter extends Component {
  state = {
    userInputList: [],
    userInput: '',
  }

  onAddUserInput = event => {
    event.preventDefault()
    const {userInput} = this.state
    const newUserInput = {
      id: v4(),
      userEnteredInput: userInput,
      userEnteredTextLength: userInput.length,
    }

    this.setState(prevState => ({
      userInputList: [...prevState.userInputList, newUserInput],
      userInput: '',
    }))
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  renderUserInputs = () => {
    const {userInputList} = this.state

    return userInputList.length === 0 ? (
      <EmptyImage
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    ) : (
      userInputList.map(eachItem => (
        <UserInput key={eachItem.id} userInputDetails={eachItem} />
      ))
    )
  }

  render() {
    const {userInput} = this.state

    return (
      <BgContainer>
        <LeftPanel>
          <InfoCardTop>
            <Info>
              Count the Characters like a
              <br />
              Boss...
            </Info>
          </InfoCardTop>
          <userInputListItem>{this.renderUserInputs()}</userInputListItem>
        </LeftPanel>

        <RightPanel>
          <CounterHeading>Character Counter</CounterHeading>
          <AddInputContainer onSubmit={this.onAddUserInput}>
            <Input
              type="text"
              onChange={this.onChangeUserInput}
              value={userInput}
              placeholder="Enter the Characters here"
            />
            <AddInputButton>Add</AddInputButton>
          </AddInputContainer>
        </RightPanel>
      </BgContainer>
    )
  }
}

export default CharacterCounter
