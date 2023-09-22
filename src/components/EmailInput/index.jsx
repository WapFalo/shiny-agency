import { Component } from 'react'

class EmailInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
    }
  }

  updateInputValue = (value) => {
    this.setState({ inputValue: value })
  }

  render() {
    const { theme } = this.props
    return (
      <div>
        {this.inputValue}
        <input onChange={(e) => this.updateInputValue(e.target.value)} />
      </div>
    )
  }
}

export default EmailInput
