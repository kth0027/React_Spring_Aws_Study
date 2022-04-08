import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Paper, List, Container } from "@material-ui/core"
// 컴포넌트
import Todo from './Todo';
import AddTodo from './AddTodo';



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

  // (1) add  함수추가
  add = (item) => {
    const thisItems = this.state.items;
    item.id = "ID-" + this.Itemslength; // key를 위한 id 추가
    item.done = false; // done 초기화
    thisItems.push(item); // 리스트에 아이템 추가
    this.setState({items : thisItems}); // 업데이트는 반드시 this.setState로 해야함.
    console.log("items : ", this.state.items);
  }



  // delete 함수
  delete = (item) => {
    const thisItems = this.state.items;
    console.log("Before Update Items : ", this.state.items)
    const newItems = thisItems.filter(e => e.id !== item.id);
    this.setState ({ items:newItems }, ()=> {
      // 디버깅 콜백
      console.log("Update Items : " , this.state.items)
    });
  }


  render() {

    var todoItems = this.state.items.length > 0 && (

      <Paper style={{ margin: 16 }}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo item={item} key={item.id} delete={this.delete} />
          ))}
        </List>
      </Paper>

    );

    {/* 반복문 */ }
    // var todoItems = this.state.items.map((item, idx) => (
    //   <Todo item={item} key={item.id} />
    // ));

    // 3 생성된 컴포넌트 리턴
    return (
      <div className='App'>
        <Container maxWidth="md">
          {/* (2) 함수연결 */}
          <AddTodo  add={this.add} />
          <div className="TodoList" style={ {marginTop:50} }>{todoItems}</div>
        </Container>

      </div>
    );




  }
}


export default App;
