<script setup lang="ts">
import { ref } from 'vue'
import NameTitle from './components/NameTitle.vue'
import NameDomain from './components/NameDomain.vue'
import ScrollToTop from './components/functionality/ScrollToTop.vue'
import GradientOrb from './components/graphics/GradientOrb.vue'
import PageContent from './components/content/PageContent.vue';
import PortfolioCard from './components/content/PortfolioCard.vue';
import PortfolioPreview from './components/content/PortfolioPreview.vue';
import PortfolioModal from './components/content/PortfolioModal.vue'
import ContactForm from './components/functionality/ContactForm.vue';

const clickedProject = ref({
	title: String,
	summary: String,
	description: String,
	tools: Array<String>,
	thumbnail: String,
	link: String,
	video: String,
})
const headings = ref([
	'I\'m a Software Engineering graduate with a passion for the web.',
	'Some projects I developed in my spare time.',
	'Want to reach out? Send me a message!',
])
const highlightedProjectsList = ref([
{
		title: 'TimeLimit',
		summary: 'Minecraft combat minigame with website integration.',
		description: 'TimeLimit is a Minecraft PVP combat minigame plugin with the main goal of being the last player standing. At the start of the game, each player has 20 minutes left to live and they must prolong their elimination by defeating other players. Results of the game are saved in a database and can be viewed on a website.',
		tools: ['Java', 'Spigot API', 'TypeScript', 'Node.js', 'React', 'REST API', 'MySQL'],
		thumbnail: './thumbnails/timelimit.png',
		link: "https://timelimit.noxite.co.nz/",
		video: "https://youtu.be/izlkUMkWJxI",
	},
	{
		title: 'Impulse',
		summary: 'A fun email newsletter service full of random thoughts.',
		description: 'Impulse is an email newsletter service for those who want to receive emails about what I am doing and thinking. It sends newletters to all subscribers on a schedule provided there is a new newsletter that has not yet been sent.',
		tools: ['JavaScript', 'Python', 'Node.js', 'Vue.js', 'REST API', 'MySQL'],
		thumbnail: './thumbnails/impulse.png',
		link: "https://impulse.noxite.co.nz/",
		video: "https://youtu.be/7zrr6ldGy30?si=4IvYb9RUrFf_x8US",
	},
	{
		title: 'Server Plugin Development',
		summary: 'Custom-made Java plugins for Appl3 PvP.',
		description: 'Almost half of the plugins on the server are custom-made by me and each one operates one crucial element of the survival multiplayer experience such as claiming, economy and quality-of-life commands.',
		tools: ['Java', 'Spigot API'],
		thumbnail: './thumbnails/appl3pvp-java-plugins.png',
		link: "https://www.youtube.com/channel/UCfmLZ-ld8Qy4oNwXGdD_Nrg",
	},
	{
		title: 'Code Paste',
		summary: 'Code viewer and editor web application for code sharing.',
		description: 'Code Paste is a simple code viewer and editor web application for your quick code snippet sharing needs. They are high-quality images that can be used on reports or to simply share code with other programmers.',
		tools: ['HTML / CSS', 'JavaScript', 'Node.js', 'Vue.js'],
		thumbnail: './thumbnails/codepaste.png',
		link: "https://jeddlupoy.com/code-paste/",
	},
])
const projectsList = ref([
	{
		title: 'Tetris',
		summary: 'The popular geometric puzzle game.',
		description: 'This version of Tetris is inspired by the game I grew up with called Tetris 4000, which uses a similar block colour palette and background image.',
		tools: ['Java'],
		thumbnail: './thumbnails/tetris.png',
		link: "https://github.com/0n3Appl3/tetris",
		video: "https://youtu.be/sfZfY9o9biM?si=zozbnLuPI3x5VSYp",
	},
	{
		title: 'Corrupted Films',
		summary: 'Hobbyist production studio website.',
		description: 'Corrupted Films is a hobbyist production studio that specialises in producing Minecraft films (also known as machinimas). The goal is to showcase Minecraft\'s cubic beauty through great cinematography and storytelling, and demonstrate the game\'s viability as a medium to create films. With each releasing project, Corrupted Films slowly bridges the gap between machinima and traditional animation.',
		tools: ['HTML / CSS', 'JavaScript'],
		thumbnail: './thumbnails/corruptedfilms.png',
		link: "https://corruptedfilms.appl3pvp.com/",
	},
	{
		title: 'Solaris Bot',
		summary: 'Discord bot made to serve players on Appl3 PvP.',
		description: 'Solaris is a friendly virtual assistant built to serve players who are on the Appl3 PvP Discord server. It can provide tutorial videos to players who need it and show how many credits a player currently has on them along with a competitive leaderboard for the richest player on the server.',
		tools: ['JavaScript', 'Node.js', 'Discord.js', 'Python'],
		thumbnail: './thumbnails/solaris.png',
		link: "https://github.com/0n3Appl3/solaris/",
		video: "https://youtu.be/Pbd8b3KdDI8",
	},
	{
		title: 'Spotify Fuchsia',
		summary: 'Minimalistic music visualiser and artist look-up web application.',
		description: "Spotify Fuchsia is a minimalistic music visualiser and artist look-up website made to animate a user's music listening experience. This was a project to experiment with the Spotify Web API, though its usage is limited to Spotify Premium users.",
		tools: ['HTML / CSS', 'JavaScript', 'Node.js', 'Spotify Web API'],
		thumbnail: './thumbnails/spotify-fuchsia.png',
		link: "https://github.com/0n3Appl3/spotify-fuchsia/",
		video: "https://youtu.be/GCCC8mwJYM8",
	},
])
const github = ref('https://github.com/0n3Appl3')
const linkedin = ref('https://www.linkedin.com/in/jeddlupoy/')
let modalOpen = ref(false)
</script>

<template>
	<NameDomain :github="github" :linkedin="linkedin"/>
	<Transition name="modal">
		<PortfolioModal v-if="modalOpen" :project="clickedProject" @close="modalOpen = false"/>
	</Transition>
	<header id="home">
		<NameTitle />
	</header>
	<GradientOrb />
	<main>
		<PageContent id="about" :text="headings[0]">
			<h3>About Me</h3>
			<h4>Hi, I'm Jedd. I'm a Software Engineering graduate with a Bachelor of Engineering with Honours.</h4>
			<p>My interest in pursuing a career in software development started at an early age modding, referred to as "hacking" in the community, a game called Need for Madness. In my early high school years, Minecraft introduced me to web development, server management, and developing Java plugins.</p>
			<p>To take my mind off programming, I focus on filmmaking and video editing as an outlet to express my enjoyment of writing and storytelling. I manage a small team at a hobbyist production studio called Corrupted Films which specialises in producing Minecraft machinimas, a film made using video game graphics.</p>
			<p>Video games have been a huge part of my childhood, particularly racing games for its fast-paced energy which has influenced my appreciation for electronic and electro pop music.</p>
		</PageContent>
		<PageContent id="portfolio" :text="headings[1]">
			<h3>Portfolio</h3>
			<h4>It all started with a few hobbyist Minecraft projects. Here is a selection of my proudest work.</h4>
			<p>My projects range from simple Discord bots to complex systems combining Minecraft and websites. These projects were completed in my spare time, and was a way for me to experiment with new libraries, frameworks, and concepts.</p>
			<div class="preview-grid__container">
				<PortfolioPreview v-for="project in highlightedProjectsList"
								:project="project"
								@response="(p: any) => clickedProject = p"
								@click="modalOpen = true" />
			</div>
			<PortfolioCard v-for="project in projectsList" 
						   :project="project"
						   @response="(p: any) => clickedProject = p"
						   @click="modalOpen = true" />
		</PageContent>
		<PageContent id="contact" :text="headings[2]">
			<h3>Contact</h3>
			<h4>Send me your questions and I will write back to you at the earliest convenience.</h4>
			<p>Also take a look my GitHub profile if you are interested in checking out projects that are not listed under my portfolio. More information about myself on LinkedIn.</p>
			<span>
				<a :href="github" target="_blank">
					<i class="bi bi-github"></i>
					GitHub
				</a>
			</span>
			<span>
				<a :href="linkedin" target="_blank">
					<i class="bi bi-linkedin"></i>
					LinkedIn
				</a>
			</span>
			<ContactForm />
		</PageContent>
	</main>
	<ScrollToTop />
</template>

<style scoped>
span a i {
	margin-right: 0.2rem;
}
.preview-grid__container {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;
	padding-top: 2rem;
}
.modal-enter-active, .modal-leave-active {
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.modal-enter-from, .modal-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
@media screen and (max-width: 750px) {
	.preview-grid__container {
		display: block;
	}
}
</style>
