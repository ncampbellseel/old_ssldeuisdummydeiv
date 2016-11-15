source user-config.sh

if [ $trigger = true ]
then

	# PROXY Settings
	export HTTP_PROXY=http://$creds$ip:$port/
	export HTTPS_PROXY=http://$creds$ip:$port/
	export http_proxy=http://$creds$ip:$port/
	export https_proxy=http://$creds$ip:$port/

fi
