const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const animate_70 = entry.target.querySelectorAll('.progress-bar-70');
		const animate_60 = entry.target.querySelectorAll('.progress-bar-60');
		const animate_50 = entry.target.querySelectorAll('.progress-bar-50');
		const animate_45 = entry.target.querySelectorAll('.progress-bar-45');
		const animate_40 = entry.target.querySelectorAll('.progress-bar-40');
		if(entry.isIntersecting) {
			animate_70.forEach(animate_70 => animate_70.classList.add('animation-1'));
			animate_60.forEach(animate_60 => animate_60.classList.add('animation-2'));
			animate_50.forEach(animate_50 => animate_50.classList.add('animation-3'));
			animate_45.forEach(animate_45 => animate_45.classList.add('animation-4'));
			animate_40.forEach(animate_40 => animate_40.classList.add('animation-5'));
			return;
		}
		animate_70.forEach(animate_70 => animate_70.classList.remove('animation-1'));
		animate_60.forEach(animate_60 => animate_60.classList.remove('animation-2'));
		animate_50.forEach(animate_50 => animate_50.classList.remove('animation-3'));
		animate_45.forEach(animate_45 => animate_45.classList.remove('animation-4'));
		animate_40.forEach(animate_40 => animate_40.classList.remove('animation-5'));
	});
});

observer.observe(document.querySelector('.skills')); 