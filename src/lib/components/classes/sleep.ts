const sleep = (milliseconds: number = 1000) =>
	new Promise((resolve) => setTimeout(resolve, milliseconds))

export default sleep
