#!/bin/bash
# Create virtual environment and install packages

python3 -m venv .

# TODO: should we use a separate directory?
source ./bin/activate

# TODO: check does what is expected
if [[ -s requirements.txt ]]; then
    pip install -r requirements.txt
fi
