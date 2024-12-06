<script lang="ts">
	let messages: HTMLElement

	interface Message {
		text: string
		style: string
	}

	const messageBuffer: Message[] = []
	let isProcessingMessages = false

	function typewriterEffect(
		element: HTMLElement,
		text: string,
		delay: number = 50
	) {
		let i = 0
		function type() {
			if (i < text.length) {
				element.textContent += text.charAt(i)
				i++
				setTimeout(type, delay)
			} else {
				processNextMessage() // Process the next message after finishing the current one
			}
		}
		type()
	}

	function updateMessages(text: string, style: string = '') {
		messageBuffer.push({ text, style })
		if (!isProcessingMessages) {
			processNextMessage()
		}
	}

	function processNextMessage() {
		if (messageBuffer.length === 0) {
			isProcessingMessages = false
			return
		}

		isProcessingMessages = true
		const { text, style } = messageBuffer.shift()!
		const message = document.createElement('div')
		if (style) message.className = style
		messages.appendChild(message)
		typewriterEffect(message, text)
	}

	function initMsg() {
		messages = document.getElementById('messages') as HTMLDivElement
	}
</script>

<div class="s-container">
	<h4>1</h4>
	<div bind:this={messages}></div>
</div>
