<script setup lang="ts">
import { ref } from 'vue'
import NameTitle from './components/NameTitle.vue'
import NameDomain from './components/NameDomain.vue'
import ScrollToTop from './components/functionality/ScrollToTop.vue'
import GradientOrb from './components/graphics/GradientOrb.vue'
import PageCard from './components/content/PageCard.vue';
import PageContent from './components/content/PageContent.vue';
import PortfolioPreview from './components/content/PortfolioPreview.vue';
import PortfolioModal from './components/content/PortfolioModal.vue'
import ButtonLink from './components/functionality/ButtonLink.vue';
import ImageStack from './components/content/ImageStack.vue';

const clickedProject = ref({
	title: String,
	summary: String,
	description: String,
	tools: Array<String>,
	thumbnail: String,
	link: String,
	video: String,
})
const highlightedProjectsList = ref([
{
		title: 'TimeLimit',
		summary: 'Minecraft combat minigame with website integration.',
		description: 'TimeLimit is a Minecraft PVP combat minigame plugin with the main goal of being the last player standing. At the start of the game, each player has 20 minutes left to live and they must prolong their elimination by defeating other players. Results of the game are saved in a database and can be viewed on a website.',
		tools: ['Java', 'Spigot API', 'TypeScript', 'Node.js', 'React', 'REST API', 'MySQL'],
		thumbnail: '/thumbnails/timelimit.png',
		link: "https://timelimit.noxite.co.nz/",
		video: "https://youtu.be/izlkUMkWJxI",
	},
	{
		title: 'Impulse',
		summary: 'A fun email newsletter service full of random thoughts.',
		description: 'Impulse is an email newsletter service for those who want to receive emails about what I am doing and thinking. It sends newletters to all subscribers on a schedule provided there is a new newsletter that has not yet been sent.',
		tools: ['JavaScript', 'Python', 'Node.js', 'Vue.js', 'REST API', 'MySQL'],
		thumbnail: '/thumbnails/impulse.png',
		link: "https://impulse.noxite.co.nz/",
		video: "https://youtu.be/7zrr6ldGy30?si=4IvYb9RUrFf_x8US",
	},
	{
		title: 'Noxite Plugins',
		summary: 'Custom-made Java plugins for the Noxite server.',
		description: 'Half of the plugins on the server are custom-made by me and each one operates one crucial element of the survival multiplayer experience such as claiming, economy and quality-of-life commands.',
		tools: ['Java', 'Spigot API'],
		thumbnail: '/thumbnails/appl3pvp-java-plugins.png',
		link: "https://www.youtube.com/channel/UCfmLZ-ld8Qy4oNwXGdD_Nrg",
	},
	{
		title: 'Code Paste',
		summary: 'Code viewer and editor web application for code sharing.',
		description: 'Code Paste is a simple code viewer and editor web application for your quick code snippet sharing needs. They are high-quality images that can be used on reports or to simply share code with other programmers.',
		tools: ['HTML / CSS', 'JavaScript', 'Node.js', 'Vue.js'],
		thumbnail: '/thumbnails/codepaste.png',
		link: "https://jeddlupoy.com/code-paste/",
	},
	{
		title: 'Tetris',
		summary: 'The popular geometric puzzle game.',
		description: 'This version of Tetris is inspired by the game I grew up with called Tetris 4000, which uses a similar block colour palette and background image.',
		tools: ['Java'],
		thumbnail: '/thumbnails/tetris.png',
		link: "https://github.com/0n3Appl3/tetris",
		video: "https://youtu.be/sfZfY9o9biM?si=zozbnLuPI3x5VSYp",
	},
])
let modalOpen = ref(false)
</script>

<template>
	<NameDomain/>
	<Transition name="modal">
		<PortfolioModal v-if="modalOpen" :project="clickedProject" @close="modalOpen = false"/>
	</Transition>
	<header id="home">
		<NameTitle />
	</header>
	<GradientOrb />
	<main>
		<PageContent id="about">
			<h3>About Me</h3>
			<h4>Kumusta, my name is Jedd. I'm a Software Engineer from the Philippines with a Bachelor of Engineering with Honours.</h4>
			<p>I am passionate about software development, and thrive on collaborative teamwork to create meaningful solutions to everyday problems. Proficient in Java, Python, TypeScript and Vue.js, with experience building and testing REST APIs for backend web application systems. Strong willingness to learn new skills and embrace new technologies.</p>
			<p>To take my mind off programming, I focus on filmmaking and video editing as an outlet to express my enjoyment of writing and storytelling. I manage a small team at a hobbyist production studio called Corrupted Films which specialises in producing machinimas, a film made using video game graphics.</p>
			<div class="image-stack__container">
				<ImageStack />
			</div>
		</PageContent>
		<PageContent id="about">
			<h3>Education</h3>
			<div class="preview-grid__container">
				<PageCard>
					<h4>Bachelor of Engineering with Honours</h4>
					<h5>University of Waikato</h5>
					<h6>Feb 2020 - Oct 2023</h6>
					<hr>
					<p>Graduated with First Class Honours. Software Engineering as a specified programme.</p>
				</PageCard>
				<PageCard>
					<h4>NCEA Level 3 Qualification</h4>
					<h5>High School</h5>
					<h6>Jan 2015 - Nov 2019</h6>
					<hr>
					<p>Graduated with Excellence Endorsement. NCEA Technology Scholarship recipient.</p>
				</PageCard>
			</div>
		</PageContent>
		<PageContent id="projects">
			<h3>Projects</h3>
			<div class="preview-grid__container">
				<PortfolioPreview v-for="project in highlightedProjectsList"
								:project="project"
								@response="(p: any) => clickedProject = p"
								@click="modalOpen = true" />
			</div>
		</PageContent>
		<PageContent id="contact">
			<h3>Contact</h3>
			<h4>Send me your questions and I will write back to you at the earliest convenience.</h4>
			<p>Also take a look my GitHub profile if you are interested in checking out projects that are not listed under my portfolio. More information about myself on LinkedIn.</p>
			<ButtonLink text="Send Email" anchor="mailto:jedd.lupoy@gmail.com" icon="bi-envelope" open-blank-page />
			<h5><i class="bi bi-envelope-fill"></i>jedd.lupoy@gmail.com</h5>
		</PageContent>
	</main>
	<ScrollToTop />
</template>

<style scoped>
span a i {
	margin-right: 0.2rem;
}
h5 i {
	margin-right: 0.5rem;
}
.image-stack__container {
	padding: 1rem;
}
.preview-grid__container {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;
	padding: 2rem 0;
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
	.image-stack__container {
		padding: 0;
	}
}
</style>
