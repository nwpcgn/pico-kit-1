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

export function updateMessages(text: string, style: string = '') {
	messageBuffer.push({ text, style })
	if (!isProcessingMessages) {
		processNextMessage()
	}
}
export function clearMessages() {
	messages.innerHTML = ''
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

export function initMsg() {
	messages = document.getElementById('messages') as HTMLDivElement
}
