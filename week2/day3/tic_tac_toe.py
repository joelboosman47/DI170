# ***************
# *    |   |    *
# * ---|---|--- *
# *    |   |    *
# * ---|---|--- *
# *    |   |    *
# ***************

board = {"row0": {0: " ", 1: " ", 2: " "}, "row1": {0: " ", 1: " ", 2: " "}, "row2": {0: " ", 1: " ", 2: " "}}

def display_board():
    '''Visually displays the Tic Tac Toe board with the player choices entered.'''
    print('TIC TAC TOE\n***************')
    print(f'*  {board["row0"][0]} | {board["row0"][1]} | {board["row0"][2]}  *')
    print('* ---|---|--- *')
    print(f'*  {board["row1"][0]} | {board["row1"][1]} | {board["row1"][2]}  *')
    print('* ---|---|--- *')
    print(f'*  {board["row2"][0]} | {board["row2"][1]} | {board["row2"][2]}  *')
    print('***************')

def player_input_part(part):
    '''Let's the player enter his row or column.\n
        It checks that the input is a digit between 1-3.\n
        Returns the input as interger'''
    
    while True:
        try:
            choice = int(input(f'Enter {part}: '))
        except:
            print("Only enter a digit between 1-3")
            continue
        else:
            if 1 <= choice <= 3:  
                break
            else: 
                print("Only enter a digit between 1-3")
                continue
    return choice

def player_input(player):
    '''Let's the chosen player (X or O) take their turn.\n
        It checks that the choice is valid and if so, saves it in the board.\n
        Returns True if input is valid.'''
    
    print(f'Player {player}\'s turn...\n')

    while True:
        row = 'row' + str(player_input_part('row') - 1)
        column = player_input_part('column') - 1
        
        current_value = board.get(row).get(column)
        if current_value != ' ':
            print('This position is already taken. Try again.')
        else:
            board[row][column] = player
            break
    return True

def check_win(board, player):
    '''Checks for winning combination of chosen player in given board.\n
        Returns True if won else False.'''
    for row in board.values():
        if row[0] == player and row[1] == player and row[2] == player:
            return True
        
    for col in range(3):
        if board['row0'][col] == player and board['row1'][col] == player and board['row2'][col] == player:
            return True
    
    if board['row0'][0] == player and board['row1'][1] == player and board['row2'][2] == player:
        return True
    elif board['row2'][0] == player and board['row1'][1] == player and board['row2'][0] == player:
        return True
    
    return False

display_board()
player_input('X')
display_board()
player_input('X')
display_board()
player_input('X')
display_board()
print(check_win(board, 'X'))