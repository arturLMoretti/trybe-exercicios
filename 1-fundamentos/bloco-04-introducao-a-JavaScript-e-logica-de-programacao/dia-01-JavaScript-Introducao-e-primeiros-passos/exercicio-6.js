let pecaXadrez = 'queden';

// fonte: https://www.ichess.net/blog/chess-pieces-moves/

switch (pecaXadrez.toLowerCase()){
    
    case 'king':
        console.log('one square in any direction if not in check');
        break;
    case 'queen':
        console.log('diagonally, horizontally, or vertically any number of squares. Do not jump over pieces');
        break;
    case 'rooks':
        console.log('horizontally or vertically any number of squares');
        break;
    case 'bishops':
        console.log('diagonally any number of squares');
        break;
    case 'knights':
        console.log("in a 'L' shape: two squares in one direction (horizontal or vertical) then one in the another direction.Can jump over pieces");
        break;
    case 'paws':
        console.log('vertically forward one square. Two if they have not yet moved');
        break;
    default:
        console.log('Error: choose between king, queen, rook, bishop, knight and pawns ');
        break;

}
