//s1.initScreen()
a.setCutoff(0.5)
a.setScale(20)
a.show()

src(s1)
	.mask(shape(100, 0.2, 0.2).scale(1, 1, 2)
		.scrollX([-.5, .5, .5, -.5].smooth())
		.scrollY([.5, -.5, .5, -.5].smooth()))
	.colorama(0.2)
	.modulateScale(noise(3, () => a.fft[0] * 10), () => a.fft[0])
	.blend(s1, 0.03)
	.out(o0)

