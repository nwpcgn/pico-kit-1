class Notification {
	private messages: { message: string; style: string }[] = []
	private currentIndex: number = 0
	private notificationWindow: HTMLElement

	constructor(notificationWindow: HTMLElement) {
		this.notificationWindow = notificationWindow
	}

	public addMessage(message: string, style: string = '') {
		this.messages.push({ message, style })
		if (this.messages.length === 1) {
			this.showNextMessage()
		}
	}

	private async showNextMessage() {
		if (this.currentIndex >= this.messages.length) {
			this.currentIndex = 0
			this.messages = []
			this.notificationWindow.style.display = 'none'
			return
		}

		const { message, style } = this.messages[this.currentIndex]
		await this.displayMessageWithTypewriterEffect(message, style)
		this.currentIndex++
		setTimeout(() => this.showNextMessage(), 3000)
	}

	private displayMessageWithTypewriterEffect(
		message: string,
		style: string
	): Promise<void> {
		return new Promise((resolve) => {
			this.notificationWindow.innerHTML = ''
			this.notificationWindow.style.display = 'block'

			const typewriterSpan = document.createElement('span')
			typewriterSpan.classList.add('typewriter-text')
			if (style) {
				typewriterSpan.classList.add(style)
			}
			this.notificationWindow.appendChild(typewriterSpan)

			let charIndex = 0

			const typewriterInterval = setInterval(() => {
				if (charIndex < message.length) {
					typewriterSpan.textContent += message[charIndex]
					charIndex++
				} else {
					clearInterval(typewriterInterval)
					resolve()
				}
			}, 100) // Adjust the speed of typewriter effect by changing this value
		})
	}
}

export default Notification
