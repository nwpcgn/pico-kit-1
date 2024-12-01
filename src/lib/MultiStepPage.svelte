<script>
	let currentStep = 1

	// Gesamtanzahl der Schritte
	const totalSteps = 3

	function nextStep() {
		if (currentStep < totalSteps) currentStep++
	}

	function prevStep() {
		if (currentStep > 1) currentStep--
	}

	const steps = [
		{ id: 1, title: 'Schritt 1: Persönliche Informationen' },
		{ id: 2, title: 'Schritt 2: Adresseingabe' },
		{ id: 3, title: 'Schritt 3: Bestätigung' }
	]
</script>

<section class="layer nwp center">
	<article class="content">
		<!-- Fortschrittsanzeige -->
		<header class="flex justify-between items-center mb-6">
			{#each steps as step}
				<div class="flex-1 flex items-center">
					<div
						class="h-8 w-8 flex justify-center items-center rounded-full text-white font-bold
          {currentStep >= step.id ? 'bg-blue-500' : 'bg-gray-300'}">
						{step.id}
					</div>
					{#if step.id < steps.length}
						<div
							class="flex-1 h-1 bg-gray-300 mx-2 {currentStep > step.id
								? 'bg-blue-500'
								: ''}">
						</div>
					{/if}
				</div>
			{/each}
		</header>

		<!-- Schrittinhalt -->
		<div class="border rounded-lg p-6 shadow-md">
			{#if currentStep === 1}
				<h2 class="text-xl font-semibold mb-4">
					Schritt 1: Persönliche Informationen
				</h2>
				<form>
					<div class="mb-4">
						<label for="name" class="block text-sm font-medium">Name:</label>
						<input
							type="text"
							id="name"
							class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" />
					</div>
					<div class="mb-4">
						<label for="email" class="block text-sm font-medium">E-Mail:</label>
						<input
							type="email"
							id="email"
							class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" />
					</div>
				</form>
			{/if}

			{#if currentStep === 2}
				<h2 class="text-xl font-semibold mb-4">Schritt 2: Adresseingabe</h2>
				<form>
					<div class="mb-4">
						<label for="address" class="block text-sm font-medium"
							>Adresse:</label>
						<input
							type="text"
							id="address"
							class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" />
					</div>
					<div class="mb-4">
						<label for="city" class="block text-sm font-medium">Stadt:</label>
						<input
							type="text"
							id="city"
							class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" />
					</div>
				</form>
			{/if}

			{#if currentStep === 3}
				<h2 class="text-xl font-semibold mb-4">Schritt 3: Bestätigung</h2>
				<p>
					Vielen Dank! Bitte überprüfen Sie Ihre Informationen und klicken Sie
					auf "Senden".
				</p>
			{/if}
		</div>

		<!-- Navigation -->
		<div class="flex justify-between mt-6">
			<button
				type="button"
				class="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
				on:click={prevStep}
				disabled={currentStep === 1}>
				Zurück
			</button>

			<button
				type="button"
				class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
				on:click={nextStep}
				disabled={currentStep === totalSteps}>
				Weiter
			</button>
		</div>
	</article>
</section>
