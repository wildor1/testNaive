@echo off
start cmd /k "mongoimport -d test -c manufacturers manufacturers.json"
mongoimport -d test -c products products.json