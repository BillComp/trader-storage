module.exports = {
	floca: {
		appName: 'Trader',
		entityName: 'Storage'
	},
	server: {
		active: false,
		port: 8080
	},
	harcon: {
		bender: {
			enabled: true
		},
		FireBender: {
			defs: require('./bending')
		}
	},
	radiation: {
		rest: {
			harconrpcPath: '/Storage'
		},
		websocket: {
			socketPath: '/Storage'
		}
	}
}
