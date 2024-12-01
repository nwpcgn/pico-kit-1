<script lang="ts">
	// import { goto, route, Router } from "@mateothegreat/svelte5-router";
	import { onMount } from 'svelte'
	// import { Modal } from 'bootstrap'
	const radius = 200
	const centerX = radius
	const centerY = radius

	let wheel: HTMLCanvasElement = null
	let spinButton: HTMLButtonElement = null
	let result: HTMLDivElement = null
	let ctx: CanvasRenderingContext2D = null
	let dialog: HTMLDivElement = null
	let startTime, spinDuration, totalRotation
	let isSpinning = false
	let startAngle = 0

	const segments = [
		{ color: '#FF6B6B', label: '100' },
		{ color: '#4ECDC4', label: '200' },
		{ color: '#45B7D1', label: '300' },
		{ color: '#F7DC6F', label: '400' },
		{ color: '#B8E986', label: '500' },
		{ color: '#FF8C94', label: '600' },
		{ color: '#9B59B6', label: '700' },
		{ color: '#3498DB', label: '800' }
	]

	const drawWheel = () => {
		ctx.clearRect(0, 0, wheel.width, wheel.height)

		const segmentAngle = (2 * Math.PI) / segments.length

		segments.forEach((segment, index) => {
			const angle = index * segmentAngle

			ctx.beginPath()
			ctx.moveTo(centerX, centerY)
			ctx.arc(centerX, centerY, radius, angle, angle + segmentAngle)
			ctx.closePath()

			ctx.fillStyle = segment.color
			ctx.fill()

			ctx.save()
			ctx.translate(centerX, centerY)
			ctx.rotate(angle + segmentAngle / 2)
			ctx.textAlign = 'right'
			ctx.fillStyle = '#fff'
			ctx.font = 'bold 20px Arial'
			ctx.fillText(segment.label, radius - 10, 10)
			ctx.restore()
		})

		// Draw the center circle
		ctx.beginPath()
		ctx.arc(centerX, centerY, 20, 0, 2 * Math.PI)
		ctx.fillStyle = '#fff'
		ctx.fill()
	}

	function rotateWheel(timestamp) {
		if (!isSpinning) return

		const elapsed = timestamp - startTime
		const progress = Math.min(elapsed / spinDuration, 1)
		const easeProgress = 1 - Math.pow(1 - progress, 3) // Cubic ease-out

		const currentRotation = startAngle + totalRotation * easeProgress

		ctx.save()
		ctx.translate(centerX, centerY)
		ctx.rotate(currentRotation)
		ctx.translate(-centerX, -centerY)
		drawWheel()
		ctx.restore()

		if (progress < 1) {
			requestAnimationFrame(rotateWheel)
		} else {
			isSpinning = false
			const winningSegment = Math.floor(
				((currentRotation % (2 * Math.PI)) / (2 * Math.PI)) * segments.length
			)
			result.textContent = `You won ${segments[winningSegment].label}!`

			spinButton.disabled = false
			openResult()
		}
	}

	function spin() {
		if (isSpinning) return

		isSpinning = true
		spinButton.disabled = true
		result.textContent = ''

		startAngle = 0
		startTime = performance.now()
		spinDuration = 5000 + Math.random() * 2000 // Random spin duration between 5-7 seconds
		totalRotation = 10 * Math.PI + Math.random() * 2 * Math.PI // At least 5 full rotations

		requestAnimationFrame(rotateWheel)
	}

	const initCanvas = async () => {
		if (!wheel) {
			console.log('No Canvas Element')
			return
		}
		console.log('initCanvas')

		ctx = wheel.getContext('2d')

		if (ctx) {
			console.log('2D-Kontext erfolgreich erstellt.')
			drawWheel()
			spinButton.addEventListener('click', spin)
		} else {
			console.error('Kein gültiger Kontext.')
		}
	}
	const openResult = () => {
		const myModal = new Modal(dialog)
		console.log(myModal)
		myModal.show()
	}
	onMount(() => {
		initCanvas()
	})
</script>

<section class="layer nwp">
	<div class="py-4 text-center">
		<h1>Wheel of Fortune</h1>
	</div>
</section>

<section class="layer center nwp">
	<canvas bind:this={wheel} width="400" height="400"></canvas>

	<div class="text-center mt-4">
		<button bind:this={spinButton} class="btn btn-lg btn-dark">SPIN</button>
	</div>
</section>
<div class="modal fade" bind:this={dialog} tabindex="-1">
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content">
			<div class="modal-body">
				<div bind:this={result} class="display-2 text-center my-4"></div>
			</div>
			<div class="modal-footer justify-content-center">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
					>Close</button>
			</div>
		</div>
	</div>
</div>
