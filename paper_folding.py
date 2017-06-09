# Given distance in units of meters, calculate how many times you have to fold
# the paper to make the paper reach this distance.

def fold_to(distance):
    if distance < 0:
        return None
    thickness = 0.0001
    folds = 0
    while thickness < distance:
        thickness *= 2
        folds += 1
    return folds

print fold_to(100000)
