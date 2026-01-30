await loadScript("https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-text.js")
await loadScript("https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-outputs.js")
await loadScript("https://metagrowing.org/extra-shaders-for-hydra/lib-cond.js")

o0.setLinear()

hydraText.font = "Manuskript Gothisch"
hydraText.lineWidth = "2%"

speed = 1

//s0.initScreen()

str = " WANGUN "
str2 = "Dwifungsi"
background = src(o1)
	.blend(src(o1), 0.1)
	.scale(1.02, 2, 1)

video = src(s0)
	.scale(1.3, 0.7, 1)

solid(.5, 0, .2, .1)
	.blend(background, .4)
	.layer(text(str)
		.modulateScale(noise(1, .3), .1))
	.diff(strokeText(str)
		.modulateScale(noise(10, 2), .01))
	.layer(text(str2)
		.scale(.5)
		.scrollY(-.1)
		.modulateScale(noise(1, .3), .1))
	.diff(strokeText(str2)
		.color(1, 1, 1, .1)
		.scale(.5)
		.scrollY(-.1)
		.modulateScale(noise(10, .3), .1),
	)
	.out(o0)

src(o1)
	.blend(video, 0.4)
	.blend(osc(100, .11, .6)
		.kaleid(50), 0.1)
	.ifzero(src(o1)
		.blend(video, 0.4)
		.blend(osc(30, 0.11, .4)
			.modulate(noise(20, 0))
			.kaleid(50), 0.1),
		() => Math.round(time / 2) % 2)
	.modulateScale(noise(1, .11), .3)
	.out(o1)

