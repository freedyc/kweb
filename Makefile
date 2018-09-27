install:
	@rm -rf /opt/nginx/html/* 
	@cp -r build/* /opt/nginx/html/
	@echo 'install success'
