#!/bin/bash
# Remove virtual environment

# TODO: maybe make it so you can use the script to just deactivate too

deactivate

rm -rf bin include lib lib64 pyvenv.cfg share
