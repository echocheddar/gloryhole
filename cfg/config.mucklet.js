const config = {
	api: {
		hostUrl: "wss://api.test.mucklet.com",
		webResourcePath: "https://api.test.mucklet.com/api/",
		origin: "https://test.mucklet.com",
	},
	bot: {
		token: '', // Bot token created under Character Settings
	},
	personality: {
		typeSpeed: 300,  // 300 characters per minute
		readSpeed: 1500, // 1500 characters per minute
	},
	actionGo: {
		populationProbability: {
			1: 100, // Probability 100 with 0 - 1 characters in the room
			2: 20,  // Probability 20 with 2 characters
			3: 5,   // Probability 5 with 3 characters
			10: 1,  // Probability 1 with 10 characters
			20: 5,  // Probability 5 with 20 characters
			80: 100 // Probability 100 with 80 characters (crowded rooms)
		},
		delay: 1000,     // Wait 1 second before using an exit
		postdelay: 5000, // Wait 5 seconds after using an exit
	},
	actionIdle: {
		probability: 0,         // No probability to idle.
		delayMin: 10 * 1000,     // Idle at least 10 seconds
		delayMax: 5 * 60 * 1000, // Idle at most 5 minutes
		spread: 'cube'           // Few high values
	},
	actionLurk: {}, // Defaults to 0 probability
	actionPose: {
		populationProbability: {
			1: 0,  // No probability to speak when alone in a room
			2: 20, // Probability 20 with 2 characters in the room
			3: 40, // Probability 40 with 3 or more characters in the room
		},
		delay: 500,     // 2 seconds additional delay before saying
		postdelay: 5 * 1000, // 5 seconds delay after saying something
		wordLengthMin: 2,    // Say at least 2 words
		wordLengthMax: 100,  // Say at most 100 words
		phrases: null        // Use lorem ipsum
	},
	actionSay: {
		populationProbability: {
			1: 0,  // No probability to speak when alone in a room
			2: 20, // Probability 20 with 2 characters in the room
			3: 40, // Probability 40 with 3 or more characters in the room
		},
		delay: 2 * 1000,     // 2 seconds additional delay before saying
		postdelay: 5 * 1000, // 5 seconds delay after saying something
		wordLengthMin: 2,    // Say at least 2 words
		wordLengthMax: 100,  // Say at most 100 words
		// phrases: null     // Use lorem ipsum
	},
	actionSleep: {}, // Defaults to 0 probability
	actionTeleport: {
		populationProbability: {
			1: 20,  // Probability 20 with 0 - 1 characters in the room
			2: 4,   // Probability 4 with 2 characters
			3: 1,   // Probability 1 with 3 characters
			10: 0,  // Probability 0 with 10 characters
			20: 1,  // Probability 1 with 20 characters
			80: 20  // Probability 20 with 80 characters (crowded rooms)
		},
		delay: 1000,     // Wait 1 second before teleporting
		postdelay: 5000, // Wait 5 seconds after teleporting
	},
	actionWakeup: {
		probability: 50,
	},
	actionWhisper: {
		populationProbability: { type: 'object', default: {
			2: 0,   // No probability when 0 - 2 characters in the room
			3: 1,   // Probability 1 with 3 characters
			80: 50  // Probability 50 with 80 characters
		}},
		delay: 2 * 1000,     // 2 seconds additional delay before whispering
		postdelay: 5 * 1000, // 5 seconds delay after whispering something
		wordLengthMin: 2,    // Say at least 2 words
		wordLengthMax: 100,  // Say at most 100 words
		// phrases: null     // Use lorem ipsum
	},
	reactionWhisperReply: {
		chance: 1,  // Always reply to whispers
		priority: 100,
	},
};

export default config;
