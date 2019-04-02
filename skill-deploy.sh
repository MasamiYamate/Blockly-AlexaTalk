#!/bin/sh
SCRIPT_DIR=$(cd $(dirname $0); pwd)
ALEXA_SCRIPT_DIR="/blocklyalexa"

cd $SCRIPT_DIR$ALEXA_SCRIPT_DIR

ask deploy --force