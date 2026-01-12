# ***************
# *  T | I | C  *
# * ---|---|--- *
# *  T | A | C  *
# * ---|---|--- *
# *  T | O | E  *
# ***************

# [AI improved  version]

# The board is now a 3x3 matrix (list of lists)
# Each board[row][col] is accessed purely by index (0, 1, or 2)
def create_board():
    return [[" " for _ in range(3)] for _ in range(3)]

def display_board(board):
    print('\n\nTIC TAC TOE\n***************')
    for i, row in enumerate(board):
        # Join the list elements with a pipe separator for a cleaner look
        print(f'*  {" | ".join(row)}  *')
        if i < 2:
            print('* ---|---|--- *')
    print('***************')

def get_input(prompt):
    while True:
        try:
            val = int(input(prompt))
            if 0 <= val <= 3: return val
            print("Out of range. Enter 1-3 (or 0 to quit).")
        except ValueError:
            print("Invalid input. Please enter a number.")

def check_win(board, p):
    # Check Rows and Columns
    for i in range(3):
        if all(board[i][j] == p for j in range(3)) or \
           all(board[j][i] == p for j in range(3)):
            return True
    
    # Check Diagonals
    if board[0][0] == board[1][1] == board[2][2] == p or \
       board[0][2] == board[1][1] == board[2][0] == p:
        return True
    return False

def play():
    board = create_board()
    player = "X"
    
    while True:
        display_board(board)
        print(f"Player {player}'s turn (0 to quit)")
        
        r = get_input("Row (1-3): ") - 1
        if r == -1: break
        c = get_input("Col (1-3): ") - 1
        if c == -1: break

        if board[r][c] == " ":
            board[r][c] = player
            if check_win(board, player):
                display_board(board)
                print(f"Player {player} wins!")
                break
            if all(" " not in row for row in board):
                display_board(board)
                print("It's a tie!")
                break
            player = "O" if player == "X" else "X"
        else:
            print("\nPosition taken! Try again.")

if __name__ == "__main__":
    play()