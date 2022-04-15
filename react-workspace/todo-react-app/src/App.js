import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Paper,
  List,
  Container,
  Grid,
  Button,
  AppBar,
  Toolbar,
  Typography
} from "@material-ui/core"
// 컴포넌트
import Todo from './Todo';
import AddTodo from './AddTodo';

// api
import { call, signout } from "./service/ApiService"



class App extends React.Component {


  // // 기존 코드 //
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // 1 item => items 배열 로
  //     items: [{

  //       id: "0",
  //       title: "Hello World 1",
  //       done: true
  //     },
  //     {
  //       id: "1",
  //       title: "Hello World 2",
  //       done: false,
  //     }
  //     ],
  //   };
  // }

  //  기존코드
  // // 백엔드 api 콜
  // componentDidMount(){
  //   const requestOptions = {
  //     meththod : "GET",
  //     headers : {"Connect-Type" : "application/json"}
  //   };

  //   fetch("http://localhost:8080/todo", requestOptions)
  //     .then( (response) => response.json() )
  //     .then(
  //       (response) => {
  //         this.setState({
  //           items: response.data,
  //         });
  //       },

  //       (error) => {
  //         this.setState({
  //           error,
  //         });
  //       }
  //     );
  // }

  // // (1) add  함수추가
  // add = (item) => {
  //   const thisItems = this.state.items;
  //   item.id = "ID-" + this.Itemslength; // key를 위한 id 추가
  //   item.done = false; // done 초기화
  //   thisItems.push(item); // 리스트에 아이템 추가
  //   this.setState({items : thisItems}); // 업데이트는 반드시 this.setState로 해야함.
  //   console.log("items : ", this.state.items);
  // }



  // // delete 함수
  // delete = (item) => {
  //   const thisItems = this.state.items;
  //   console.log("Before Update Items : ", this.state.items)
  //   const newItems = thisItems.filter(e => e.id !== item.id);
  //   this.setState ({ items:newItems }, ()=> {
  //     // 디버깅 콜백
  //     console.log("Update Items : " , this.state.items)
  //   });
  // }

  constructor(props) {
    super(props);
    this.state = {
      items: [],

      /* 1. 로딩중이라는 상태이다. 생성자에 상태 변수를 추가한다. */
      loading: true,
    };
  }

  componentDidMount() {
    /* 2. componentDidMount에서 todo리스트를 가져오는 
 GET 리퀘스트가 성공적으로 리턴하는 경우 loading을 false로 고친다. 
 더 이상 로딩중이 아니라는 뜻이다. */
    call("/todo", "GET", null).then((response) =>
      this.setState({ items: response.data, loading: false })
    );
  }

  add = (item) => {
    call("/todo", "POST", item).then((response) =>
      this.setState({ items: response.data })
    );
  };

  delete = (item) => {
    call("/todo", "DELETE", item).then((response) =>
      this.setState({ items: response.data })
    );
  };

  update = (item) => {
    call("/todo", "PUT", item).then((response) =>
      this.setState({ items: response.data })
    );
  };


  render() {

    var todoItems = this.state.items.length > 0 && (

      <Paper style={{ margin: 16 }}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo item={item} key={item.id} delete={this.delete} update={this.update} />
          ))}
        </List>
      </Paper>

    );

    // navigationBar 추가
    var navigationBar = (
      <AppBar position="static">
        <Toolbar>
          <Grid justify="space-between" container>
            <Grid item>
              <Typography variant="h6">오늘의 할일</Typography>
            </Grid>
            <Grid>
              <Button color="inherit" onClick={signout}>
                로그아웃
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );

    /* 로딩중이 아닐 때 렌더링 할 부분 */
    var todoListPage = (
      <div>
        {navigationBar} {/* 네비게이션 바 렌더링 */}
        <Container maxWidth="md">
          <AddTodo add={this.add} />
          <div className="TodoList">{todoItems}</div>
        </Container>
      </div>
    );

     /* 로딩중일 때 렌더링 할 부분 */
     var loadingPage = <h1> 로딩중.. </h1>;

     var content = loadingPage;
 
     if (!this.state.loading) {
      /* 로딩중이 아니면 todoListPage를 선택*/
      content = todoListPage;
    }

    {/* 반복문 */ }
    // var todoItems = this.state.items.map((item, idx) => (
    //   <Todo item={item} key={item.id} />
    // ));

    // 3 생성된 컴포넌트 리턴
    return (
      <div className='App'>
        {/* (2) 함수연결 */}
        {/* <Container maxWidth="md">

          <AddTodo add={this.add} />
          <div className="TodoList" style={{ marginTop: 50 }}>{todoItems}</div>
        </Container> */}
        {content}
      </div>
    );




  }


}


export default App;
