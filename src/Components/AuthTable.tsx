import React, {Component} from 'react';

interface Props {
    userName: string
    password: string
    addButton?: boolean
}

export class MyTable extends Component<Props>{
    addBttn?: boolean
    userName: string
    password: string

    constructor(props: Props) {
        super(props);
        this.addBttn = props.addButton
        this.userName = props.userName
        this.password = props.password

    }

    render() {
        return (
            <div>
                <input type="text" onChange={this._onChangeUserName} defaultValue={"UserName"}/>
                <input type="password" onChange={this._onChangePassword}/>
                <button onClick={this._handlePostClick}>Post</button>
                <button onClick={this._handleGetClick}>Get</button>
            </div>
        )
    }

    _onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.userName = (e.target as HTMLInputElement).value
    }
    _onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.password = (e.target as HTMLInputElement).value
    }

    _handlePostClick = () => {
        let userParams = {
            title: this.password,
            username: this.userName,
            someReal: 83.7,
            signUpDate: ontimeupdate
        };
        // fetch('http://ec2-18-184-22-36.eu-central-1.compute.amazonaws.com:8080/', {
        //     body: JSON.stringify(userParams),// "{\"MyKey\":\"My Value\"}",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     method: "POST",
        //     //mode: "no-cors",!!!!
        // }).then(resp => resp.json()).then(data => console.log(data))

        fetch('http://localhost:3001/api/testdb', {
            body: JSON.stringify(userParams),
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            //mode: "no-cors",//!!!!
        }).then(resp => resp.json()).then(data => console.log(data))





        // fetch('http://ec2-18-184-22-36.eu-central-1.compute.amazonaws.com:8080/api/tutorials', {
        //     method: "GET",
        //     //mode: "no-cors",!!!!
        // }).then(resp => resp.json()).then(data => console.log(data))


        // let userParams2 = {
        //     title: this.userName,
        //     description: this.password
        // };
        // fetch('http://ec2-18-184-22-36.eu-central-1.compute.amazonaws.com:8080/api/tutorials', {
        //     body: JSON.stringify(userParams2),// "{\"MyKey\":\"My Value\"}",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     method: "POST",
        //     //mode: "no-cors",!!!!
        // }).then(resp => resp.json()).then(data => console.log(data))




        //     .then(async (response) => {
        //     const data = await response.json();
        //     console.log(data)
        // });
    }


    _handleGetClick = () => {
        let userParams = {
            title: this.password,
            username: this.userName,
            someReal: 83.7,
            signUpDate: ontimeupdate
        };

        fetch('http://localhost:3001/api/testdb', {
            method: "GET",
        }).then(resp => resp.json()).then(data => console.log(data))
    }

    //NOT!!! ERROR:
    // handleClick() {
    //     alert(this.userName)
    // }
}


