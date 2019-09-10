module.exports = {
	// node
	nodeNum: 256,
	byzantineNodeNum: 0,
	// ba
	useExternalBA: false,
	// ba specific param
	lambda: 2,
	BAType: 'pbft',
	configPath: '/Users/nicky/general-consensus-platform/tendermint/mytestnet/node',
	// network env
	networkType: 'tcp-json',
	host: 'localhost',
	port: 36251,
	networkDelay: {
		mean: 0.25,
		std: 0.05
	},
	startDelay: 0,
	// simulator
	showDashboard: false,
	// attacker
	attacker: 'attacker',
	// repeat
	repeatTime: 100
};
/* fast todo
	2. cachin ba
*/
