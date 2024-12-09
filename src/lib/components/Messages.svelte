<script lang="ts" module>
	interface Message {
		text: string
		style: string
	}
	const typeSpeed = 1
	let messageBuffer: Message[] = $state([])
	let messages: Message[] = $state([])
	let isProcessingMessages: Boolean = $state(false)

	function typewriter(node, { speed = 1 }) {
		const valid =
			node.childNodes.length === 1 &&
			node.childNodes[0].nodeType === Node.TEXT_NODE

		if (!valid) {
			throw new Error(
				`This transition only works on elements with a single text node child`
			)
		}

		const text = node.textContent
		const duration = text.length / (speed * 0.01)

		return {
			duration,
			tick: (t) => {
				const i = ~~(text.length * t)
				node.textContent = text.slice(0, i)
			}
		}
	}

	function processNextMessage() {
		if (messageBuffer.length === 0) {
			isProcessingMessages = false
			return
		}

		isProcessingMessages = true
		const { text, style } = messageBuffer.shift()!
		const delay = text.length / (typeSpeed * 0.01)
		messages = [...messages, { text, style }]
		setTimeout(() => processNextMessage(), delay)
	}

	export function updateMessages(text: string, style: string = '') {
		messageBuffer.push({ text, style })
		if (!isProcessingMessages) {
			processNextMessage()
		}
	}
	export function clearMessages() {
		while (messageBuffer.length) {
			messageBuffer.shift()
		}
		while (messages.length) {
			messages.shift()
		}
	}
</script>

<script lang="ts">
</script>

<div class="messages">
	{#each messages as { text, style }}
		<div class="msg {style}" transition:typewriter>{text}</div>
	{/each}
</div>


