import React from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core"

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: { title: "" } }; // 사용자 입력 받는 저장오브젝트
        this.add = props.add; // props 함수를 this.add 에 연결
    }

    // 1 함수작성
    OnInputChange = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({ item: thisItem });
        console.log(thisItem);
    }

    // 버튼클릭
    onButtonClick = () => {
        this.add(this.state.item); // add 함수사용
        this.setState( {item : {title : ""} });
    }

    // 엔터키
    enterKeyEventHandler = (e) => {
        if (e.key === "Enter") {
            this.onButtonClick();
        }
    }

    render() {
        return (
            <Paper style={{ marginTop: 50 }}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
                        <TextField
                            placeholder="Add Todo Here"
                            fullWidth
                            // 2 함수연결
                            onChange={this.OnInputChange}
                            value={this.state.item.title}
                            onKeyPress={this.enterKeyEventHandler}
                        >

                        </TextField>
                    </Grid>
                    <Grid xs={1} md={1} item>
                        <Button fullWidth color="secondary" variant="outlined" onClick={this.onButtonClick}>+</Button>
                    </Grid>
                </Grid>
            </Paper>
        );
    }

}

export default AddTodo;
