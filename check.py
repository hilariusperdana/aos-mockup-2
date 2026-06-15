import sys

with open(r"x:\projects\aos-redesign-mockup\app.js", "r", encoding="utf-8") as f:
    code = f.read()

try:
    # We can't compile JS with Python's compile(), but wait, Python compiles PYTHON!
    pass
except Exception as e:
    pass
