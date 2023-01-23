const myTags = [
	'Говно', 'Залупа', 'Пенис',
	'Очко', 'Давалка', 'Хер',
	'Рукоблуд', 'Ссанина', 'Блядун',
	'Вагина', 'Сука', 'Ебланище',
	'Влагалище', 'Пердун', 'Дрочила',
];

var tagCloud = TagCloud('.content', myTags,{

  // radius in px
  radius: 270,

  // animation speed
  // slow, normal, fast
  maxSpeed: 'fast',
  initSpeed: 'slow',

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,

  // interact with cursor move on mouse out
  keep: true

}); 
