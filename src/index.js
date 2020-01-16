import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// function Square(props) {
//   return (
//     <button className="square" onClick={props.onClick}>
//       {props.value}
//     </button>
//   );
// }

// class Board extends React.Component {
//   renderSquare(i) {
//     return (
//       <Square
//         value={this.props.squares[i]}
//         onClick={() => this.props.onClick(i)}
//       />
//     );
//   }

//   render() {
//     return (
//       <div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// class Game extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       history: [
//         {
//           squares: Array(9).fill(null)
//         }
//       ],
//       stepNumber: 0,
//       xIsNext: true,
//       z : [],
//     };
//   }

//   handleClick(i) {
//     const history = this.state.history.slice(0, this.state.stepNumber + 1);
//     const current = history[history.length - 1];
//     const squares = current.squares.slice();
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     this.state.z.push(i);
    
//     squares[i] = this.state.xIsNext ? "X" : "O";
//     this.setState({
//       history: history.concat([
//         {
//           squares: squaresT
//         }
//       ]),
//       stepNumber: history.length,
//       xIsNext: !this.state.xIsNext,
      
//     });
//   }

//   jumpTo(step) {
//     this.setState({
//       stepNumber: step,
//       xIsNext: (step % 2) === 0
//     });
//   }

//   render() {
//     const history = this.state.history;
//     const current = history[this.state.stepNumber];
//     const winner = calculateWinner(current.squares);
//     // console.log(this.state.index);
//     const moves = history.map((step, move) => {
//       const desc = move ?
//         'Go to move #' + move +'|| kolumna' +(Math.floor((this.state.z[move-1])/3)+1)+' || rzad' + (this.state.z[move-1]-(3*Math.floor((this.state.z[move-1])/3))+1):
//         'Go to game start';
//         console.log(move,this.state.z.length);
//         if (move === this.state.z.length) { 
//           return (
//           <li key={move}>
//             <button onClick={() => this.jumpTo(move)}><b>{desc}</b></button>
//           </li>
//           );
//         } else {
//           return (
//           <li key={move}>
//             <button onClick={() => this.jumpTo(move)}>{desc}</button>
//           </li>
//           );
//          };
//     });

//     let status;
//     if (winner) {
//       status = "Winner: " + winner;
//     } else {
//       status = "Next player: " + (this.state.xIsNext ? "X" : "O");
//     }

//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board
//             squares={current.squares}
//             onClick={i => this.handleClick(i)}
//           />
//         </div>
//         <div className="game-info">
//           <div>{status}</div>
//           <ol>{moves}</ol>
//         </div>
//       </div>
//     );
//   }
// }

// // ========================================

// ReactDOM.render(<Game />, document.getElementById("root"));

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }


// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       counter: 0,
//       double: 0,
//       name: "",
//       surname: "",
//     }
//     this.increment = this.increment.bind(this);
//     this.incrementMinus = this.incrementMinus.bind(this);
//     this.double = this.double.bind(this);
//     this.handleChange = this.handleChange.bind(this);
    
//   }

//   increment() {
//     this.setState({
//       counter: this.state.counter +1,
//     })
//   }

//   incrementMinus() {
//     this.setState({
//       counter: this.state.counter -1,
//     })
//   }

//   double() {
//     this.setState({
//       double: this.state.double +1,
//     }, () => console.log(this.state.double));
//   }

//   handleChange(event) {
//     this.setState({
//       [event.target.placeholder]: event.target.value
//     })
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.increment}>+</button>
//         <output>{this.state.counter}</output>
//         <button onClick={this.incrementMinus}>-</button>
//         <br></br>
//         <button onDoubleClick={this.double}>+</button>
//         <output>{this.state.double}</output>
//         <br></br>
//         <input placeholder="name"  onInput={this.handleChange}></input>
//         <input placeholder="surname"  onInput={this.handleChange}></input>
//         <output>{this.state.name} {this.state.surname}</output>
//       </div>
//     )
//   }
// }


class Children extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <button name="-1" onClick={this.props.onClick}>-KUt</button>
        <input value={this.props.wartosc} type="text"/>
        <button name="1" onClick={this.props.onClick}>+</button>
      </div>
    )
  }
}


const allUsers = ['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania'];

const UserList = ({users}) => {
  if (users.length > 0) {
    return (
      <ul>
        {users.map(user => <li key={user}>{user}</li>)}
      </ul>
    );
  }
  return (
    <p>No results!</p>
  )
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      filteredUsers: allUsers,
    };
  }

  filterUsers(e) {
    const text = e.currentTarget.value;
    const filteredUsers = this.getFilteredUsersForText(text);
    this.setState({
      filteredUsers,
    });
  }

  getFilteredUsersForText(text) {
    return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()))
  }

  render() {
    return (
      <div>
        <input onInput={(e) => this.filterUsers(e)} />
        <UserList users={this.state.filteredUsers} />
      </div>
    )
  }
}

class Parents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 5,
    }
    // this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(i) {
    this.setState({
      value: this.state.value+Number(i.target.name),
    })
  }

  inputValue(e) {
    this.setState({
      value: Number(e.target.value),
    })
  }

  render() {
    return (
      <div>
      <Children wartosc={this.state.value} onClick={(i) => this.handleClick(i)}/>
      <input placeholder="wpisz nowa wartosc"  onInput={(e) => this.inputValue(e)}/>
      <App />
      </div>
    )
  }
}

ReactDOM.render(<Parents />, document.getElementById("root"));