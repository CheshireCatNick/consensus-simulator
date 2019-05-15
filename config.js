module.exports = {
	// node
	nodeNum: 32,
	byzantineNodeNum: 0,
	// ba
	useExternalBA: false,
	// ba specific param
	lambda: 1,
	BAType: 'vmware-ba/vrf',
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
	attacker: 'vmware-attacker/adaptive-attacker',
	// repeat
	repeatTime: 100
};
/* fast todo
	2. cachin ba
*/
