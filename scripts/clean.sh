#!/bin/bash

find . -type d -name "node_modules" | while read dir; do
  if [ -e "$dir/turbo.exe" ]; then
    echo "Skipping $dir because it contains turbo.exe"
  else
    rm -rf "$dir"
    echo "Deleted $dir"
  fi
done
