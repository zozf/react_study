# react_study
React の勉強

参考URL  
React で作る Todo アプリケーション  
<https://youtu.be/-JIoiJs420M>

React の基本を学びつつ、Todo アプリを作成しました

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

・every  
　配列メソッド  
　配列全てが true なら true  
　配列全てが true でなければ false

・filter  
　配列メソッド  
　配列に対して filter をかける  
　filter の中で呼ばれた関数が true を返したものだけ返す

## コマンド集
・npx create-react-app フォルダ名  
　フォルダ名 に react の開発環境を作成

・npm start  
　ローカルサーバーを起動して React アプリを確認できる

・npm run build  
　src と public 内のファイルを1つにまとめて（バンドル）、build ディレクトリに出力

・npm test  
　テストラン

・npm run eject  
　babel や webpack の設定を変更したい場合のみ使用

## 補足
・node が入ると勝手に npm もインストールされる

・ビルド  
　ソースコードに問題（バグ）がないか解析を行い、問題がなければ実行できる形のファイルに変換し、組み立てること

・コンパイル  
　ビルド作業の中に含まれる作業の一段階  
　ソースコードを人間が読んでわかりやすいプログラミング言語から機械が読んでわかりやすい機械語に翻訳を行うこと

## その他の環境構築ツール
・Next.js  
　サーバーサイドレンダリング

・Gatsby  
　静的ウェブサイトに最適