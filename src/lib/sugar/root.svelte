<header>
	<nav class="s-container">
		<a class="brand" href="/"
			><svg viewBox="0 0 24 24" class="nwp-icon">
				<g>
					<path fill="none" d="M0 0h24v24H0z" />
					<path
						d="M21 19h2v2H1v-2h2V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v15h4v-8h-2V9h3a1 1 0 0 1 1 1v9zM5 5v14h8V5H5zm2 6h4v2H7v-2zm0-4h4v2H7V7z" />
				</g></svg
			><strong>nwp-app</strong></a>
		<menu>
			<li><a>item</a></li>
			<li><a>item</a></li>
		</menu>
	</nav>
</header>
<main class="main">
	<div class="layer">
		<div class="s-container">
			<section>
				<hgroup
					aria-label="Main title - Subtitle"
					id="archer-agency"
					class="hero-header">
					<h1>Archer - Agency</h1>
					<h2 aria-hidden="true">
						<span>Gefahr ist mein zweiter Vorname direkt nach</span>
						<strong>Sterling</strong>
					</h2>
				</hgroup>
			</section>
			<section>
				<article>
					<details open name="accordions">
						<summary>Open for Instant Smiles, Handle With Glee!</summary>
						<div>Welcome to the world of tomorrow!</div>
					</details>
					<details name="accordions">
						<summary>Open for Instant Smiles, Handle With Glee!</summary>
						<div>Hi there!</div>
					</details>
					<details name="accordions">
						<summary>Open for Instant Smiles, Handle With Glee!</summary>
						<div>
							Unleash pure joy with surprise goodies that guarantee laughter.
							It's happiness in a box—brace for grins!
						</div>
					</details>
					<hr />
					<details>
						<summary role="button" class="s-secondary">
							Open for Instant Smiles, Handle With Glee!
						</summary>
						<div>
							Unleash pure joy with surprise goodies that guarantee laughter.
							It's happiness in a box—brace for grins!
						</div>
					</details>
					<details>
						<summary role="button" class="s-outline">
							Open for Instant Smiles, Handle With Glee!
						</summary>
						<div>
							Unleash pure joy with surprise goodies that guarantee laughter.
							It's happiness in a box—brace for grins!
						</div>
					</details>
					<details>
						<summary role="button">
							Open for Instant Smiles, Handle With Glee!
						</summary>
						<div>
							Unleash pure joy with surprise goodies that guarantee laughter.
							It's happiness in a box—brace for grins!
						</div>
					</details>
					<hr />
					<article role="presentation">
						<details>
							<summary role="button">
								Open for Instant Smiles, Handle With Glee!
							</summary>
							<div>
								Unleash pure joy with surprise goodies that guarantee laughter.
								It's happiness in a box—brace for grins!
							</div>
						</details>
					</article>
				</article>
			</section>
			<section>
				<article aria-label="Example card">
					<header>List</header>
					<div>
						<dl>
							<dt>Dictionary</dt>
							<dd>
								a reference book on a particular subject, the items of which are
								typically arranged in alphabetical order.
							</dd>
						</dl>
						<hr />
						<menu>
							<li>Deploying Websites to Hosting Platforms</li>
							<li>Web Security Best Practices</li>
							<li>Introduction to Serverless Architecture</li>
						</menu>
					</div>
				</article>
				<article aria-label="Example card">
					<header>Progress</header>
					<div>
						<div style="--span: 6" class="s-grid">
							<div>
								<div>
									<label>
										<progress value=".7" max="1">70 %</progress>
									</label>
								</div>
								<div aria-busy="true" inert>
									<progress role="presentation"></progress>
								</div>
							</div>
						</div>
					</div>
				</article>
			</section>
			<section>
				<!--           <header>Tabs</header>
              <article role="presentation">
                <div role="tablist">
                  <button
                    aria-controls="car"
                    aria-selected="true"
                    id="tab-car"
                    role="tab"
                  >
                    Car
                  </button>
                  <button
                    aria-controls="bus"
                    aria-selected="false"
                    id="tab-bus"
                    role="tab"
                    tabindex="-1"
                  >
                    Bus
                  </button>
                  <button
                    aria-controls="bike"
                    aria-selected="false"
                    id="tab-bike"
                    role="tab"
                    tabindex="-1"
                  >
                    Bike
                  </button>
                </div>
                <div aria-labelledby="tab-car" id="car" role="tabpanel">
                  The sleek silver sedan hummed softly as it glided down the
                  winding mountain road, its headlights piercing through the
                  darkness.
                </div>
                <div aria-labelledby="tab-bus" id="bus" role="tabpanel" hidden>
                  The bustling city bus rumbled along, filled with a diverse
                  array of passengers, each lost in their own thoughts amidst
                  the rhythmic sway of the journey.
                </div>
                <div
                  aria-labelledby="tab-bike"
                  id="bike"
                  role="tabpanel"
                  hidden
                >
                  The vibrant red bike leaned against the old oak tree, its
                  tires still warm from the afternoon ride, while the sun cast
                  long shadows across the quiet suburban street.
                </div>
                <div>
                  If there is a following element after last
                  <code>role="tabpanel"</code> gap is added automatically.
                </div>
              </article> -->
				<article role="presentation">
					<div role="tablist">
						<button
							aria-controls="car"
							aria-selected="true"
							id="tab-car"
							role="tab">
							Car
						</button>
						<button
							aria-controls="bus"
							aria-selected="false"
							id="tab-bus"
							role="tab"
							tabindex="-1">
							Bus
						</button>
						<button
							aria-controls="bike"
							aria-selected="false"
							id="tab-bike"
							role="tab"
							tabindex="-1">
							Bike
						</button>
					</div>
					<div aria-labelledby="tab-car" id="car" role="tabpanel">
						The sleek silver sedan hummed softly as it glided down the winding
						mountain road, its headlights piercing through the darkness.
					</div>
					<div aria-labelledby="tab-bus" id="bus" role="tabpanel" hidden>
						The bustling city bus rumbled along, filled with a diverse array of
						passengers, each lost in their own thoughts amidst the rhythmic sway
						of the journey.
					</div>
					<div aria-labelledby="tab-bike" id="bike" role="tabpanel" hidden>
						The vibrant red bike leaned against the old oak tree, its tires
						still warm from the afternoon ride, while the sun cast long shadows
						across the quiet suburban street.
					</div>
				</article>
			</section>
		</div>
	</div>
</main>
<footer>
	<div class="s-container">Footer content</div>
</footer>
