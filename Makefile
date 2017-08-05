tsc = tsc

build: 
	$(tsc) --project src/parser/tsconfig.json
	$(tsc) --project src/host-process/tsconfig.json
	
.PHONY: build