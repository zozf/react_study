import React from 'react';

// Form
import Form from './Form';
// CheckAll
import CheckAll from './CheckAll';
// Filter
import Filter from './Filter';
// EditTodo
import EditTodo from './EditTodo';
// Todo
import Todo from './Todo';

let currentId = 0

// クラスコンポーネントはもう使わない
class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            // filter のデフォルトを all にしておく
            filter: 'all',
            todos: []
        };
    }

    render() {
        const { todos, filter } = this.state
        const filteredTodos = todos.filter(({ completed }) => {
            switch (filter) {
                case 'all':
                    return true;

                case 'uncompleted':
                    return !completed;

                case 'completed':
                    return completed;

                default:
                    return true;
            }
        });

        return (
            <div>
                {/* フォーム */}
                <Form onSubmit={this.handleSubmit} />

                {/* 完了ボタン */}
                <CheckAll
                  allCompleted={
                      todos.length > 0 && todos.every(({ completed }) => completed)
                  }
                  onChange={this.handleChangeAllCompleted}
                />

                {/* フィルター */}
                < Filter filter={filter} onChange={this.handleChangeFilter} />

                {/* to do */}
                <ul>
                    {filteredTodos.map(({ id, text, completed, editing }) => (
                      <li key={id}>
                          {editing ? (
                              <EditTodo
                                id={id}
                                text={text}
                                onCancel={this.handleChangeTodoAttribute}
                                onSubmit={this.handleUpdateTodoText}
                              />
                          ) : (
                            <Todo
                                id={id}
                                text={text}
                                completed={completed}
                                onChange={this.handleChangeTodoAttribute}
                                onDelete={this.handleClickDelete}
                            />
                          )}
                      </li>
                    ))}
                </ul>

                <button onClick={this.handleClickDeleteCompleted}>
                    完了済みをすべて削除
                </button>
            </div>
        );
    }

    handleSubmit = text => {
        const newTodo = {
            id: currentId,
            text,
            completed: false,
            editing: false
        };
        const newTodos = [...this.state.todos, newTodo];
        this.setState({ todos: newTodos });
        currentId++;
    };

    handleChangeAllCompleted = completed => {
        const newTodos = this.state.todos.map(todo => ({
            ...todo,
            completed
        }));

        this.setState({ todos: newTodos });
    };

    handleChangeFilter = filter => {
        this.setState({ filter })
    }

    handleChangeTodoAttribute = (id, key, value) => {
        const newTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    [key]: value
                };
            }

            return todo
        })
        this.setState({ todos: newTodos });
    };

    handleUpdateTodoText = (id, text) => {
        const newTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    text,
                    editing: false,
                };
            }

            return todo;
        });

        this.setState({ todos: newTodos });
    };

    handleClickDelete = id => {
        const newTodos = this.state.todos.filter(todo => todo.id !== id)
        this.setState({ todos: newTodos });
    };

    handleClickDeleteCompleted = () => {
        const newTodos = this.state.todos.filter(({ completed }) => !completed)
        this.setState({ todos: newTodos });
    };
}


// ★ファンクショナルコンポーネントを使う!!
// const App = () => <div>App</div>

// エクスポート
export default App;