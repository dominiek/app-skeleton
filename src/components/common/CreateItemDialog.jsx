
const React = require('react')
const Api = require('./../../utils/Api')
import { Modal } from 'semantic-ui-react'

export default class CreateItemDialog extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      error: null,
      visible: true
    }
  }
  componentWillReceiveProps () {
    this.setState({visible: true})
  }
  render () {
    let { loading, error, visible } = this.state
    return (
      <Modal open={visible}>
        <Modal.Header>
          Create Item
        </Modal.Header>
        <Modal.Content>
          { error && (<div className='ui error message'>{error.message}</div>)}
          <form className='ui form' onSubmit={(e) => this._save(e)}>
            <div className='field'>
              <label>Name</label>
              <input type='text' ref='nameInput' name='name' placeholder='' />
            </div>
          </form>
        </Modal.Content>
        <Modal.Actions>
          <button className={loading ? 'ui primary loading button' : 'ui primary button'} type='submit' onClick={(e) => this._save(e)}>Create</button>
          <button type='button' className='ui button' onClick={(e) => this._close(e)}>Close</button>
        </Modal.Actions>
      </Modal>
    )
  }
  _close (e) {
    e && e.preventDefault()
    let visible = false
    this.setState({visible})
    this.props.onClose && this.props.onClose()
  }
  _save (e) {
    e && e.preventDefault()
    let params = {
      name: this.refs.nameInput.value
    }
    this.setState({loading: true})
    Api.request('POST', '/items', params, (error, result) => {
      let loading = false
      if (error) return this.setState({error, loading})
      this.setState({loading})
      this._close()
    })
  }
}
