module.exports = {
	globals: {
		'ts-jest': {
			tsConfig: 'tsconfig.json',
		}
	},
	moduleFileExtensions: [
		'ts',
		'js', 
		'json',
	],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
	testMatch: [
		'**/test/**/*.spec.(ts|js)',
	],
	testEnvironment: 'node',
	preset: 'ts-jest',
};
