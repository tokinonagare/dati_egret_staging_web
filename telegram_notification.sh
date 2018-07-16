#!/usr/bin/env bash

timestamp=$(cat timestamp)
commit_info=$(cat commit_info)
curl -v --data-urlencode "text=答题 web 部署完成 ##{server_type} ${timestamp} ${commit_info}" "https://api.telegram.org/bot213022846:AAFfsv0sfyffvmZDtNftvMW0gbVimM4O1P8/sendMessage?chat_id=-1001138683387"