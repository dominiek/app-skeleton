
const React = require('react')
const Api = require('./../../utils/Api')
import { List, Icon } from 'semantic-ui-react'

export default class ItemsList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      error: null
    }
  }
  componentDidMount () {
    this.fetch()
  }
  render () {
    let { loading, error, result } = this.state
    return (
      <div className='items-list'>
        { loading && (<div className='ui active loader' />) }
        { error && (<div className='ui error message'>{error.message}</div>) }
        { result && result.length === 0 && (<div className='ui message'>No items created yet.</div>) }
        { result && result.length > 0 && (
          <List divided verticalAlign='middle'>
            {result.map((item) => {
              return (
                <List.Item key={item.id}>
                  <List.Content floated='right'>
                    <button className='ui tiny red icon button' onClick={(e) => this.props.onDelete(item, e)}><i className='trash icon' /></button>
                  </List.Content>
                  <Icon name='cube' />
                  <List.Content>
                    {item.name}
                  </List.Content>
                </List.Item>
              )
            })}
          </List>
        ) }
      </div>
    )
  }
  fetch () {
    Api.request('GET', '/items', {}, (error, result) => {
      let loading = false
      this.setState({ loading, result, error })
    })
  }
}
