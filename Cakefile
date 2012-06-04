{exec} = require 'child_process'

execAndPipe = (execString) ->
	piper = exec execString

	piper.stderr.on 'data', (data) ->
		# console.log "** #{execString} error **"
		process.stderr.write data.toString()
	piper.stdout.on 'data', (data) ->
		# console.log "-- #{execString} --"
		process.stdout.write data.toString()
			
task 'watch', 'Compile Speedr in watch mode', ->
	execAndPipe 'coffee -o lib/ -cw coffee/*.coffee'

task 'w', 'Shorthand for "watch"', -> invoke 'watch'
