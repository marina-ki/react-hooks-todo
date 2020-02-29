import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div className="container-fluid">
      <h4>Todoアプリ</h4>
      <form>
        <div class="card">

        <div class="card-body">
          <h5 class="card-title"><input className="form-control" id="formEventTitle" placeholder="タイトル" /></h5>
          <p class="card-text"><textarea className="form-control" id="formEventBody" placeholder="詳細"/></p>
          <button className="btn btn-primary">作成する</button>
        </div>
        </div>
      </form>
  

      <h4>Todo一覧</h4>
      <div class="card">

<div class="card-body">
  <h5 class="card-title">サンプルタイトル</h5>
  <p class="card-text">サンプル詳細</p>
  <button className="btn btn-primary">削除する</button>
</div>
</div>
    </div>
  )
}

export default App;