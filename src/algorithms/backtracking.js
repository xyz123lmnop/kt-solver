import util from '../utils/utils';

export default async function backtrack(board, moves, updateBoard, moveKnight) {
    await setTimeout(async () => {
        console.log('new start', moves)
        let curBoard = board; 
        curBoard[0][0] = 1; // <- remove later

        
      if (util.boardVisited(moves)) {
          return true; // break case
      }

      // get the current position of the knight and the
      // possible moves for it to make
      const lastMove = moves[moves.length - 1];
      let possibleMoves = util.findMoves(lastMove);
      possibleMoves = util.shuffle(possibleMoves);


        // for each possible move check if its a valid move
        // if it is, make that move
      for (let moveIdx = 0; moveIdx < possibleMoves.length; moveIdx++) {
        const curMove = possibleMoves[moveIdx];
        if (util.validMove(curBoard, curMove)) {
          moves.push(curMove);
          let row = curMove[0];
          let column = curMove[1];

          curBoard[row][column] = 1;

          moveKnight(curMove);
          updateBoard(curBoard);
          if (backtrack(curBoard, moves, updateBoard, moveKnight)) {
            return true;
          }

          moves.pop();
          curBoard[curMove[0]][curMove[1]] = 0;
          moveKnight(moves[moves.length - 1]);
          updateBoard(curBoard);
        }
      }

      curBoard[lastMove[0]][lastMove[1]] = 0;
      moves.pop();

      // let random = Math.floor(Math.random() * 5) + 2;
      // if (random > moves.length) random = moves.length;
      // for (let i = 2; i < random; i++) {
      //   curBoard[moves[moves.length - i][0]][moves[moves.length - i][1]] = 0;
      // }

      // for (let j = 2; j < random; j++) {
      //   moves.pop();
      // }

      moveKnight(moves[moves.length - 2]);
      updateBoard(curBoard);
      backtrack(curBoard, moves, updateBoard, moveKnight);
    }, 500);
  }
