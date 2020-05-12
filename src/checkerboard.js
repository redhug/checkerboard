import React, { Component } from 'react';
export default class CheckerBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
           number:8
        }
        this.boarddiv = React.createRef();
        this.onChangeNumber = this.onChangeNumber.bind(this);
    }
    onChangeNumber(e) {
        this.setState({
            number: e.target.value
        });
    }
    render() {
      var squares = [];
      var color = 0;
      for (let i = 0; i < this.state.number*this.state.number; ++i) {
        if(i%(this.state.number*2)===0){
            squares.push(<div className={"square square-black"}></div>);
            color=0;
        }
        else if(i%this.state.number===0){
            squares.push(<div className={"square square-white"}></div>);
            color=1;
        }
        else if(color===1){
            squares.push(<div className={"square square-black"}></div>);
            color=0;
        }
        else{
            squares.push(<div className={"square square-white"}></div>);
            color=1;
        }
      }
   
      return (
          <div>
         <div className="mt20" > 
                        <label>Enter number: </label>
                        <input  type="text"
                                className="mb10"
                                value={this.state.number}
                                onChange={this.onChangeNumber}
                                />
           </div>
          <div className="board" style={{"max-width" : this.state.number*52+"px","max-height" : this.state.number*52+"px"}} ref={this.boarddiv}>{squares}</div>
        </div>
      );
    }
}
  