default:
	@cat readMe
install:
	@cp -r ./nginx.conf /opt/nginx/conf
	@/opt/nginx/sbin/nginx -s reload
	@echo done
reboot:
	@cp -r ./nginx.conf /opt/nginx/conf
	@/opt/nginx/sbin/nginx -s stop
	@/opt/nginx/sbin/nginx -c /opt/nginx/conf/nginx.conf
	@echo reboot done 
