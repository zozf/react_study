// React のインポート
import React from 'react'
// ReactDOM（htmlに変換する機能）のインポート
import ReactDOM from 'react-dom'
import App from './components/App'

// public/index.html の id="root" に hoge を埋め込む
ReactDOM.render(<App />, document.getElementById('root'));
