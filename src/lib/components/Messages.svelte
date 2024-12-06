<script lang="ts">
	import { onMount } from 'svelte'

	interface Message {
		text: string
		style: string
	}
	let msgEl: HTMLElement
	let isProcessingMessages = false
	const messageBuffer: Message[] = []

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

	export function updateMessages(text: string, style: string = '') {
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
		const message = document.createElement('p')
		if (style) message.className = style
		messages.appendChild(message)
		typewriterEffect(message, text)
	}

	onMount(() => {
		console.log('wera')
	})
</script>

<div bind:this={msgEl} class="messages flex-1 bg-base-300"></div>
