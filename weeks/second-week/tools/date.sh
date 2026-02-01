#!/bin/bash

if [ $# -ne 2 ]; then
  echo "usage: $0 <output> <format>"
  exit 1
fi

#date
abYd=$(date "+%a %b %Y %d")

Ymda=$(date "+%Y-%m-%d %a")
full=$(date +"%Y-%m-%d %H:%M:%S")

echo "$abYd"
echo "$Ymda"
echo "$full"
