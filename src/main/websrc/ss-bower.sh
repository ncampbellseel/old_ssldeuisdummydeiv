source user-config.sh

if [ $trigger = true ]
then

# BOWER Settings

rm .bowerrc

echo "{
	\"registry\": \"http://bower.herokuapp.com\",
	\"strict-ssl\": false
}" > .bowerrc



fi

bower install
