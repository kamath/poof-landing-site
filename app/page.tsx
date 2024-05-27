import 'animate.css'

export default function Home() {
	return (
		<main className="flex flex-col justify-center h-screen px-8 bg-gradient-to-br from-gray-800 to-black">
			<h1 className="animate__animated animate__fadeIn text-8xl font-bold xs:text-4xl text-transparent bg-clip-text bg-gradient-to-t from-[#cfd9df] to-[#e2ebf0]">Poof</h1>
			<h3 className="text-2xl font-bold text-white">Coming to a group chat near you. <a href="https://anirudhkamath.notion.site/It-s-time-to-build-486f0ce990114ab9b2d0c9a4aeaa0c2a" className="text-white text-2xl font-bold mt-8 underline">Read our core theses</a>.</h3>
		</main>
	);
}
