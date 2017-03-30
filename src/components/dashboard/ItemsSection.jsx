
import React, { Component } from 'react'
import ItemsList from 'common/ItemsList'
import CreateItemDialog from 'common/CreateItemDialog'
import Api from 'utils/Api'

export default class ItemsSection extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showCreateDialog: false
    }
  }
  render () {
    let { showCreateDialog } = this.state
    return (
      <div className='items-section'>
        <ItemsList ref='itemsList' onDelete={(item, e) => this._delete(item, e)} />
        <div className='ui hidden clearing divider' />
        <button className='ui primary button' onClick={(e) => this._showCreateItemDialog(e)}>Create Item</button>
        { showCreateDialog && (<CreateItemDialog onClose={() => this._closeDialogs()} />) }
      </div>
    )
  }
  _showCreateItemDialog (e) {
    e && e.preventDefault()
    let showCreateDialog = true
    this.setState({ showCreateDialog })
  }
  _closeDialogs () {
    let showCreateDialog = false
    this.setState({ showCreateDialog })
    this._refresh()
  }
  _refresh () {
    this.refs.itemsList && this.refs.itemsList.fetch()
  }
  _delete (item, e) {
    e && e.preventDefault()
    Api.request('DELETE', '/items/' + item.id, {}, () => {
      this._refresh()
    })
  }
}
