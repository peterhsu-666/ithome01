var datas = [
	{
		no: 1,
		title: 'calculator',
		desc: '製作一個簡易的計算機',
    blog: 'https://peterhsu-666.github.io/ithome01/content/',
    demo: 'calculator.html',
		//github: 'https://github.com/guahsu/JavaScript30/tree/master/01_Java-Script-Drum-Kit/',
		gifYn: 'Y',
	},
	{
		no: 2,
		title: 'todo',
		desc: '製作一個外出用的待辦事項',
    blog: 'https://peterhsu-666.github.io/ithome01/content/',
    demo: 'todo.html',
		//github: 'https://github.com/guahsu/JavaScript30/tree/master/02_JS-and-CSS-Clock/',
		gifYn: 'Y',
	},
];

/** 畫面建立 */
function createView() {
	var couseList = document.querySelector('.courseList');
	var view = '';
	datas.forEach(data => {
		view += `<li>
              <div class="course ${data.gifYn === 'Y' ? 'hasGif' : ''}">
                <div class="course__image">
                  <div class="course__ribbon"><div class="course__no">#${data.no}</div></div>
                  
                  <img src="${data.blog}${data.title}.png" alt="demo${data.no}">
                </div>
                <h2 class="course__title">#${data.no} - ${data.title}</h2>
                <div class="course__desc">${data.desc}</div>
                <a class="course__btn" href="${
									data.demo
								}" target="_blank">DEMO</a>
              </div>
            </li>`;
	});
	document.querySelector('.courseList').innerHTML = view;
	//// 加上滑鼠移入移出的效果監聽
	//var courses = Array.from(document.querySelectorAll('.course'));
	//courses.forEach(course => {
	//	course.addEventListener('mouseenter', changeImgaeType);
	//	course.addEventListener('mouseleave', changeImgaeType);
	//});
}

/** 圖片讀取檢查 */
function checkLoad(image) {
	var loadEl = image.parentElement.querySelector('.course__loading');
	setTimeout(function() {
		if (image.complete) {
			loadEl.style.display = 'none';
		} else {
			loadEl.style.display = 'block';
			checkLoad(image);
		}
	}, 100);
}

/** 變更圖片類別(滑鼠移入載GIF) */
function changeImgaeType() {
	if (this.classList.contains('hasGif')) {
		var courseImg = this.querySelector('img');
		var isPlay = courseImg.classList.contains('gif-play');
		isPlay ? courseImg.classList.remove('gif-play') : courseImg.classList.add('gif-play');
		var type = isPlay ? ['gif', 'png'] : ['png', 'gif'];
		var image = courseImg.getAttribute('src').replace(type[0], type[1]);
		courseImg.setAttribute('src', image);
		checkLoad(courseImg);
	}
}

/** 啟動-用arrow function判斷是否有支援ES6 */
(function() {
	try {
		new Function('(a = 0) => a');
		createView();
	} catch (err) {
		document.querySelector('.courseList').innerHTML =
			'<h2>這裡空空一片是因為你的瀏覽器不支援ES6的語法<br>請升級你的瀏覽器或使用最新的Chrome吧!</h2>';
	}
})();
