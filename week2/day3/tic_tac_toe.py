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
    print('\n\nTIC TAC TOE\n***************')
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
            # if player typed 0, the game will quit.
            if choice == 0 or (1 <= choice <= 3):  
                break
            else: 
                print("Only enter a digit between 1-3")
                continue
    return choice

def player_input(player):
    '''Let's the chosen player (X or O) take their turn.\n
        It checks that the choice is valid and if so, saves it in the board.\n
        Returns True if input is valid.'''
    
    print(f'Player {player}\'s turn...\n(Type 0 to quit the game.)\n')

    while True:
        row = 'row' + str(player_input_part('row') - 1)
        if row == 'row-1': return False # check if player wants to quit.
        column = player_input_part('column') - 1
        if column == -1: return False  # check if player wants to quit.
        current_value = board.get(row).get(column)
        if current_value != ' ':
            print('This position is already taken. Try again.')
        else:
            board[row][column] = player
            break
    return True

def check_win(board, player):
    '''Checks if the player won after his/her turn.\n
    If so, return True.'''
    # 1. Check Rows and Columns in one loop
    for i in range(3):
        # Check Row i
        if all(board[f"row{i}"][j] == player for j in range(3)):
            return True
        # Check Column i
        if all(board[f"row{j}"][i] == player for j in range(3)):
            return True

    # 2. Check Diagonals
    # Top-left to bottom-right
    if board["row0"][0] == board["row1"][1] == board["row2"][2] == player:
        return True
    # Top-right to bottom-left
    if board["row0"][2] == board["row1"][1] == board["row2"][0] == player:
        return True

    return False

def check_tie(board):
    '''Checks all the cells in all the rows in the board and returns True if they are all filled
        and False if there is still an empty cell left.'''
    all_cells = [cell for row in board.values() for cell in row.values()]
    # This returns True if ' ' is NOT in the list, and False if it is.
    return ' ' not in all_cells

def switch_player(player):
    if player == 'X':
        return 'O'
    else: return 'X'

def play():
    current_player = 'X'
    game_over = False
    
    while game_over == False:
        display_board()
        
        # check if player wants to quit the game 
        if player_input(current_player) == False:
            print('Good bye!')
            break
        if check_win(board, current_player):
            display_board()
            game_over = True
            print(f'Player {current_player} won! Game over.')
        elif check_tie(board):
            display_board()
            print("It's a tie! Game over.")
            game_over = True
        else:
            current_player = switch_player(current_player)

play()