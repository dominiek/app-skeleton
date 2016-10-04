/* global $ */

const React = require('react')
const ItemsList = require('./ItemsList')
const CreateItemDialog = require('./CreateItemDialog')
const Api = require('./../utils/Api')

export default React.createClass({
  getInitialState () {
    return {
      showCreateDialog: false
    }
  },
  componentDidMount () {
    $('.top.fixed.menu .item').removeClass('active')
    $('.top.fixed.menu .item.items').addClass('active')
  },
  render () {
    let { showCreateDialog } = this.state
    return (
      <div className='items-section'>
        <ItemsList ref='itemsList' onDelete={this._delete} />
        <div className='ui hidden clearing divider' />
        <button className='ui primary button' onClick={this._showCreateItemDialog}>Create Item</button>
        { showCreateDialog && (<CreateItemDialog onClose={this._closeDialogs} />) }
      </div>
    )
  },
  _showCreateItemDialog (e) {
    e && e.preventDefault()
    let showCreateDialog = true
    this.setState({ showCreateDialog })
  },
  _closeDialogs () {
    let showCreateDialog = false
    this.setState({ showCreateDialog })
    this._refresh()
  },
  _refresh () {
    this.refs.itemsList && this.refs.itemsList.fetch()
  },
  _delete (item, e) {
    e && e.preventDefault()
    Api.request('DELETE', '/items/' + item.id, {}, () => {
      this._refresh()
    })
  }
})
