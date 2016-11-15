cd custom_packages
for REPO in `ls`; do (cd "$REPO"; git pull); done;