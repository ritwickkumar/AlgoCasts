# // --- Directions
# // Given a string, return a new string with the reversed
# // order of characters
# // --- Examples
# //   reverse('apple') === 'leppa'
# //   reverse('hello') === 'olleh'
# //   reverse('Greetings!') === '!sgniteerG'

def reversed(input: str) -> str:
    lst = list(input)
    # List Reverse
    lst.reverse()
    return ''.join(lst)

print(reversed('abcd'))
