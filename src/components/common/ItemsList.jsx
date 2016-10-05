
const React = require('react')
const Api = require('./../../utils/Api')

export default React.createClass({
  getInitialState () {
    return {
      loading: true,
      error: null
    }
  },
  componentDidMount () {
    this.fetch()
  },
  render () {
    let { loading, error, result } = this.state
    return (
      <div className='items-list'>
        { loading && (<div className='ui active loader' />) }
        { error && (<div className='ui error message'>{error.message}</div>) }
        { result && result.length === 0 && (<div className='ui message'>No items created yet.</div>) }
        { result && result.length > 0 && (
          <div className='ui divided list'>
            {result.map((item) => {
              return (
                <div className='item' key={item.id}>
                  <div className='right floated content'>
                    <button className='ui tiny red icon button' onClick={(e) => this.props.onDelete(item, e)}><i className='trash icon' /></button>
                  </div>
                  <i className='cube icon' />
                  <div className='content'>
                    {item.name}
                  </div>
                </div>
              )
            })}
          </div>
        ) }
      </div>
    )
  },
  fetch () {
    Api.request('GET', '/items', {}, (error, result) => {
      let loading = false
      this.setState({ loading, result, error })
    })
  }
})
