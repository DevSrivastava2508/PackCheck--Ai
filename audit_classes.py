import re, sys, collections

css = ""
for f in ('assets/styles2.css', 'assets/styles1.css', 'style.css'):
    css += open(f, encoding='utf-8', errors='ignore').read()

defined = set()
for m in re.finditer(r'\.((?:\\.|[A-Za-z0-9_-])+)', css):
    defined.add(re.sub(r'\\(.)', r'\1', m.group(1)))

if len(sys.argv) > 1:
    for c in sys.argv[1:]:
        print(('OK   ' if c in defined else 'MISS '), c)
    raise SystemExit

# Only inspect the marketing surface: landing + login + shell chrome.
src = open('app.js', encoding='utf-8', errors='ignore').read()

def slice_fn(name):
    i = src.index('function %s(' % name)
    depth, j, started = 0, i, False
    while j < len(src):
        if src[j] == '{':
            depth += 1; started = True
        elif src[j] == '}':
            depth -= 1
            if started and depth == 0:
                return src[i:j+1]
        j += 1
    return src[i:]

scope = slice_fn('renderLandingPage') + slice_fn('renderLoginPage') + \
        open('index.html', encoding='utf-8', errors='ignore').read()

used = collections.Counter()
for m in re.finditer(r'class="([^"]*)"', scope):
    for c in m.group(1).split():
        if '${' in c:
            continue
        used[c] += 1

# Classes we define ourselves are fine; flag only genuinely unstyled ones.
missing = {c: n for c, n in used.items() if c not in defined}
print("marketing-surface classes used : %d" % len(used))
print("MISSING (no CSS rule)          : %d" % len(missing))
for c, n in sorted(missing.items(), key=lambda x: -x[1]):
    print("   %3d  %s" % (n, c))
