# Change to your username and password
username=""
password="" #try not to have special characters like $%*

# DO NOT EDIT BELOW THIS LINE (unless required for production/non-auth proxy)
auth=false
trigger=false
ip="192.168.41.8"
port="80"
creds=""

if [ $auth = true ]
then
    creds="${username}:${password}@"
fi
