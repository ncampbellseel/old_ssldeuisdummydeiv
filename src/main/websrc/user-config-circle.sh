# Leave blank for CircleCI
username=""
password=""

auth=false
trigger=false
ip=""
port=""
creds=""

if [ $auth = true ]
then
    creds="${username}:${password}@"
fi
