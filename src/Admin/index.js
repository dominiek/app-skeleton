import 'theme/semantic.less';

import React from 'react';
import ReactDOM from 'react-dom';

// import createHistory from 'history/createBrowserHistory';
// import { syncHistoryWithStore, RouterStore } from 'mobx-react-router';
import { configure } from 'mobx';

configure({
  enforceActions: 'strict'
});

/*
const routing = new RouterStore();
const history = syncHistoryWithStore(createHistory(), routing);

const stores = {
  routing
};
*/

ReactDOM.render(<div>hello</div>, document.getElementById('root'));
