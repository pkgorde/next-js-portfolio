from copy import deepcopy

def AllTicTacToeCom():
    count = 1
    board = [[0,0,0] for _ in range(3)]
    currentPlayer = 1
    seen_states = set()

    def invertCP(currentPlayer):
        if currentPlayer == 1:
            return 2
        else: return 1

    def isGameOver(board):
        # rows
        for i in range(3):
            #rows
            if board[i][0] == board[i][1] == board[i][2] and board[i][0] != 0:
                return True
            #columns
            if board[0][i] == board[1][i] == board[2][i] and board[0][i] != 0:
                return True
        #diag1
        if board[0][0] == board[1][1] == board[2][2] and board[0][0] != 0:
            return True
        #diag2
        if board[0][2] == board[1][1] == board[2][0] and board[0][2] != 0:
            return True
        # full board:
        emptyCheck = True
        for i in range(3):
            for j in range(3):
                if board[i][j] == 0:
                    emptyCheck = False
        return emptyCheck
    
    def board_to_tuple(board):
        return tuple(tuple(row) for row in board)

    def recur(board, currentPlayer):
        nonlocal count
        board_state = board_to_tuple(board)

        if board_state in seen_states:
            return
        seen_states.add(board_state)

        if isGameOver(board):
            count += 1
            return

        for i in range(3):
            for j in range(3):
                if board[i][j] == 0:
                    board_copy = deepcopy(board)
                    board_copy[i][j] = currentPlayer
                    recur(board_copy, invertCP(currentPlayer))
        
    recur(board, currentPlayer)
    return count
        
print(AllTicTacToeCom())







