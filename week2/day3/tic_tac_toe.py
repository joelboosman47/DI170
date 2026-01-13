# ***************
# *  T | I | C  *
# * ---|---|--- *
# *  T | A | C  *
# * ---|---|--- *
# *  T | O | E  *
# ***************

# The board is a nested dictionary. Keys are row names, values are dictionaries 
# mapping column indices (0, 1, 2) to their markers ('X', 'O', or ' ').
board = {"row0": {0: " ", 1: " ", 2: " "}, "row1": {0: " ", 1: " ", 2: " "}, "row2": {0: " ", 1: " ", 2: " "}}

def display_board():
    '''Visually displays the Tic Tac Toe board with the player choices entered.'''
    print('\n\nTIC TAC TOE\n***************')
    # Using f-strings to inject the specific values from our nested board dictionary.
    print(f'*  {board["row0"][0]} | {board["row0"][1]} | {board["row0"][2]}  *')
    print('* ---|---|--- *')
    print(f'*  {board["row1"][0]} | {board["row1"][1]} | {board["row1"][2]}  *')
    print('* ---|---|--- *')
    print(f'*  {board["row2"][0]} | {board["row2"][1]} | {board["row2"][2]}  *')
    print('***************')

def player_input_part(part):
    '''Handles user input for a specific coordinate (row or column).
       Includes error handling for non-integers and range validation.'''
    while True:
        try:
            # int() will raise a ValueError if the user types a letter.
            choice = int(input(f'Enter {part}: '))
        except ValueError:
            print("Only enter a digit between 1-3")
            continue
        else:
            # Check if input is within the allowed range (0 to quit, 1-3 to play).
            if choice == 0 or (1 <= choice <= 3):  
                break
            else: 
                print("Only enter a digit between 1-3")
                continue
    return choice

def player_input(player):
    '''Main logic for a player's turn. Validates that a cell is empty before marking it.'''
    print(f'Player {player}\'s turn...\n(Type 0 to quit the game.)\n')

    while True:
        # Convert user's 1-3 input to 0-2 index and match dictionary key format.
        row = 'row' + str(player_input_part('row') - 1)
        if row == 'row-1': return False # Exit if user typed 0.
        
        column = player_input_part('column') - 1
        if column == -1: return False   # Exit if user typed 0.
        
        # Check the current state of the cell before allowing a move.
        current_value = board.get(row).get(column)
        if current_value != ' ':
            print('This position is already taken. Try again.')
        else:
            # Update the global board dictionary with the player's marker.
            board[row][column] = player
            break
    return True

def check_win(board, player):
    '''Iterates through all possible winning combinations (rows, columns, diagonals).'''
    
    # 1. Check Rows and Columns using a loop
    for i in range(3):
        # all() is efficient: it returns True only if the marker matches 'player' 3 times.
        # Check Row i
        if all(board[f"row{i}"][j] == player for j in range(3)):
            return True
        # Check Column i
        if all(board[f"row{j}"][i] == player for j in range(3)):
            return True

    # 2. Check Diagonals manually as they don't follow the simple i/j loop pattern.
    if board["row0"][0] == board["row1"][1] == board["row2"][2] == player:
        return True
    if board["row0"][2] == board["row1"][1] == board["row2"][0] == player:
        return True

    return False

def check_tie(board):
    '''Flattens the board into a single list to check if any empty spaces remain.'''
    # This list comprehension extracts every single value from the nested structure.
    all_cells = [cell for row in board.values() for cell in row.values()]
    # Returns True if ' ' is NOT in the list, and False if it is.
    return ' ' not in all_cells

def switch_player(player):
    '''Simple toggle logic to swap between X and O.'''
    return 'O' if player == 'X' else 'X'

def play():
    '''The main game engine.'''
    current_player = 'X'
    game_over = False
    
    while not game_over:
        display_board()
        
        # If player_input returns False, it means a player chose to quit (typed 0).
        if player_input(current_player) == False:
            print('Good bye!')
            break
            
        # Check win conditions first, then tie conditions.
        if check_win(board, current_player):
            display_board()
            print(f'Player {current_player} won! Game over.')
            game_over = True
        elif check_tie(board):
            display_board()
            print("It's a tie! Game over.")
            game_over = True
        else:
            # If no win/tie, switch to the next player and repeat the loop.
            current_player = switch_player(current_player)

# Start the game
play()