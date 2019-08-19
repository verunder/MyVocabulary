#!/usr/bin/env bash
cd $(dirname $0)
# todo add install
npm i
ng build
ng serve &
