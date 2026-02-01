#!/bin/bash

if [ $# -ne 2 ]; then
  echo "usage: $0 <output> <format>"
  exit 1
fi

out=$1
fmt=$2


case "$fmt" in
  abYd)
    abYd=$(date "+%a %b %Y %d")
    echo "$abYd"
    ;;
  Ymda)
    Ymda=$(date "+%Y-%m-%d %a")
    echo "$Ymda"
    ;;
  full)
    full=$(date +"%Y-%m-%d %H:%M:%S")
    echo "$full"
    ;;
  *)
    echo "unknown format: $fmt"
    exit 1
    ;;
esac

#date
#write >> out

# tee -a <file>
