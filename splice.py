import io, shutil

SRC = 'app.js'
NEW = '.sl_new_landing.js'

lines = io.open(SRC, encoding='utf-8').read().split('\n')

# 1-indexed -> 0-indexed
start = 388 - 1   # "function renderLandingPage() {"
end = 1042 - 1    # closing "}" of initLandingInteractions

assert lines[start].startswith('function renderLandingPage()'), repr(lines[start])
assert lines[end].strip() == '}', repr(lines[end])
assert 'VIEW 2: LOGIN PAGE' in lines[1045 - 1], repr(lines[1045 - 1])

shutil.copyfile(SRC, 'app.js.bak')

new_block = io.open(NEW, encoding='utf-8').read().rstrip('\n').split('\n')
out = lines[:start] + new_block + lines[end + 1:]

io.open(SRC, 'w', encoding='utf-8', newline='\n').write('\n'.join(out))
print('spliced OK: removed %d lines, inserted %d lines' % (end - start + 1, len(new_block)))
