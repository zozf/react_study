# react_study
react の勉強


試しに to do アプリを作成しました

## 要点
・create-react-app は React 開発環境を簡単に構築できるツール

・src ----- コンポーネントを作る js ファイル  
　public -- html ファイルや設定ファイル  
　build --- 本番環境用ファイル  

・コードを編集＆保存するとサイトを更新する機能があり、開発しやすい

・constructor  
　class をインスタンス化した時に最初に呼ばれる処理  
　1番最初に処理したいものを記述する

・state  
　アプリケーションの中で保存される値  
　js でデータを保存しておくための箱

・onEvent  
　イベントを表すprops

・onChange  
　フォーム全体の入力変更を検知

・handleEvent  
　イベントを処理するメソッド

・e  
　イベントの変数のこと  
　イベントが渡されてくる

・setState  
　state に反映、state の input を指定、state の更新  
 （js で管理されているため、React Developer Tools で値を確認できる）

・props  
　React のコンポーネントに渡す値、コンポーネントの再利用

## コマンド集
・npx create-react-app フォルダ名<br>
　フォルダ名 に react の開発環境を作成

・npm start<br>
　ローカルサーバーを起動して React アプリを確認できる

・npm run build<br>
　src と public 内のファイルを1つにまとめて（バンドル）、build ディレクトリに出力

・npm test<br>
　テストラン

・npm run eject<br>
　babel や webpack の設定を変更したい場合のみ使用

## 注意事項
・node が入ると勝手に npm もインストールされる

## その他の環境構築ツール
・Next.js  
　サーバーサイドレンダリング

・Gatsby  
　静的ウェブサイトに最適