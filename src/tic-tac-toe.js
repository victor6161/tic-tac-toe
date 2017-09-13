class TicTacToe {
    constructor() {

        matrix = [
                [null, null, null],
                [null, null, null],
                [null, null, null]
            ];
        k = 0;

    }

    getCurrentPlayerSymbol() {
        if(k%2 === 0){
             return "x";
        }else{
            return "o"; 
        }
    
        
      
    }

    nextTurn(rowIndex, columnIndex) {
        if(matrix[rowIndex][columnIndex] === null){
            if(k%2 === 0){
                matrix[rowIndex][columnIndex] = "x";
            }else{
                matrix[rowIndex][columnIndex] = "o";
            }
            k++;
        }
        
        
    }

    isFinished() {
        if(this.noMoreTurns() || this.getWinner() === 'x' || this.getWinner() === 'o'){
            return true;
        }
        return false;

    }

    getWinner() {
        if(matrix[0][0] ==='o' && matrix[0][1] === 'o' && matrix[0][2] === 'o' ){
            return 'o';
        }
        if(matrix[1][0] ==='o' && matrix[1][1] === 'o' && matrix[1][2] === 'o' ){
            return 'o';
        }
        if(matrix[2][0] ==='o' && matrix[2][1] === 'o' && matrix[2][2] === 'o' ){
            return 'o';
        }
        if(matrix[0][0] ==='o' && matrix[1][1] === 'o' && matrix[2][2] === 'o' ){
            return 'o';
        }
        if(matrix[2][0] ==='o' && matrix[1][1] === 'o' && matrix[0][2] === 'o' ){
            return 'o';
        }
        if(matrix[0][0] ==='o' && matrix[1][0] === 'o' && matrix[2][0] === 'o' ){
            return 'o';
        }
        if(matrix[0][1] ==='o' && matrix[1][1] === 'o' && matrix[2][1] === 'o' ){
            return 'o';
        }
        if(matrix[0][2] ==='o' && matrix[1][2] === 'o' && matrix[2][2] === 'o' ){
            return 'o';
        }


        if(matrix[0][0] ==='x' && matrix[0][1] === 'x' && matrix[0][2] === 'x' ){
            return 'x';
        }
        if(matrix[1][0] ==='x' && matrix[1][1] === 'x' && matrix[1][2] === 'x' ){
            return 'x';
        }
        if(matrix[2][0] ==='x' && matrix[2][1] === 'x' && matrix[2][2] === 'x' ){
            return 'x';
        }
        if(matrix[0][0] ==='x' && matrix[1][1] === 'x' && matrix[2][2] === 'x' ){
            return 'x';
        }
        if(matrix[2][0] ==='x' && matrix[1][1] === 'x' && matrix[0][2] === 'x' ){
            return 'x';
        }
        if(matrix[0][0] ==='x' && matrix[1][0] === 'x' && matrix[2][0] === 'x' ){
            return 'x';
        }
        if(matrix[0][1] ==='x' && matrix[1][1] === 'x' && matrix[2][1] === 'x' ){
            return 'x';
        }
        if(matrix[0][2] ==='x' && matrix[1][2] === 'x' && matrix[2][2] === 'x' ){
            return 'x';
        }
        return null;


    }

    noMoreTurns() {
       
        var test = true;
        for(var i = 0; i < matrix.length ; i++) {
            for(var j = 0; j < matrix[i].length ; j++) {
                if(matrix[i][j] === null){
                    test = false;
                } 
            }
        }
        return test;
        
    }

    isDraw() {
        if(this.noMoreTurns() && this.getWinner() != 'o' && this.getWinner() != 'x'){
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return matrix[rowIndex][colIndex];
    }
}
var matrix;
var k; 


   

module.exports = TicTacToe;
