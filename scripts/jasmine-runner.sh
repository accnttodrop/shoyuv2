#!/bin/sh
jascmd=$SHOYU_HOME/node_modules/jasmine-node/bin/jasmine-node
testdir=$SHOYU_HOME/$1/$2
srcdir=$SHOYU_HOME/$1
echo "Running \n $jascmd --autotest $testdir"
$jascmd --autotest  $testdir --watch $srcdir
