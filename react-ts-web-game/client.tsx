import * as React from 'react';
import * as  ReactDOM from 'react-dom';

import GuGuDan from './1_GuGuDan/GuGuDan';
import WordRelay from './2_WordRelay/WordRelay';
import NumberBaseball from './3_NumberBaseball/NumberBaseball';
import ResponseCheck from './4_ResponseCheck/ResponseCheck';
import RockPaperScissors from './5_RockPaperScissors/RockPaperScissors';
import Lotto from './6_Lotto/Lotto';
import TicTacToe from './7_TicTacToe/TicTacToe';

// ReactDOM.render(<GuGuDan />, document.querySelector('#root'));
// ReactDOM.render(<WordRelay />, document.querySelector('#root'));
// ReactDOM.render(<NumberBaseball />, document.querySelector('#root'));
// ReactDOM.render(<ResponseCheck />, document.querySelector('#root'));
// ReactDOM.render(<RockPaperScissors />, document.querySelector('#root'));
// ReactDOM.render(<Lotto />, document.querySelector('#root'));
ReactDOM.render(<TicTacToe />, document.querySelector('#root'));