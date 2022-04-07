import React from 'react';
import Todo from './Todo';
import logo from './logo.svg';
import './App.css';
import {Paper, List } from "@material-ui/core"



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // 1 item => items 배열 로
      items: [{

        id: "0",
        title: "Hello World 1",
        done: true
      },
      {
        id: "1",
        title: "Hello World 2",
        done: false,
      }
      ],
    };
  }


  render() {

    var todoItems = this.state.items.length > 0 && (
      <Paper style={{margin : 16}}>
        <List>
          {this.state.items.map((item, idx) =>(
            <Todo item={item} key={item.id} />
          ))}
        </List>
      </Paper>
    );

    {/* 반복문 */ }
    // var todoItems = this.state.items.map((item, idx) => (
    //   <Todo item={item} key={item.id} />
    // ));

    // 3 생성된 컴포넌트 리턴
    return <div className='App'>{todoItems}</div>




  }
}


export default App;
