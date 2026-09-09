import io

SRC = 'app.js'
NEW = '.sl_new_login.js'

lines = io.open(SRC, encoding='utf-8').read().split('\n')

start = 1070 - 1
end = 1122 - 1

assert lines[start].startswith('function renderLoginPage()'), repr(lines[start])
assert lines[end].strip() == '}', repr(lines[end])
assert 'initLoginInteractions' in lines[1124 - 1], repr(lines[1124 - 1])

new_block = io.open(NEW, encoding='utf-8').read().rstrip('\n').split('\n')
out = lines[:start] + new_block + lines[end + 1:]

io.open(SRC, 'w', encoding='utf-8', newline='\n').write('\n'.join(out))
print('login spliced OK: removed %d, inserted %d' % (end - start + 1, len(new_block)))
