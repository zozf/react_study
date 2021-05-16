import React from 'react'

// フォーム
class Form extends React.Component {
    constructor(props) {
        super(props);

        // state はアプリケーションの中で保存される値
        this.state = {
            input: ''
        };
    }

    // 入力追加フォーム
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                  type='text'
                  value={this.state.input}
                  onChange={this.handleChange} />
                <button>追加</button>
            </form>
        );
    }

    handleChange = e => {
        this.setState({ input: e.currentTarget.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        // 空文字だったら return で終わらせる
        if (!this.state.input) return;
        this.props.onSubmit(this.state.input);
        this.setState({ input: '' });
    };
}

export default Form;
